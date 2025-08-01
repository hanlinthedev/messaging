import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  private client = new OAuth2Client({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.CALLBACK_URL,
  });
  constructor(
    @Inject() private usersService: UserService,
    @Inject() private readonly jwtService: JwtService,
  ) {}

  async login(user: any, idToken: string) {
    const ticket = await this.client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      throw new UnauthorizedException('Invalid ID token');
    }
    const { email, name, picture } = payload;
    const newUser = await this.usersService.create({
      name: name as string,
      email: email as string,
      avatar: picture,
    });

    const jwtPayload = { username: newUser.email, sub: newUser._id };
    const token = this.jwtService.sign(jwtPayload);
    const refreshToken = this.jwtService.sign(
      { sub: newUser._id },
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME,
        secret: process.env.JWT_REFRESH_SECRET,
      },
    );
    console.log(token);
    return {
      access_token: token,
      refresh_token: refreshToken,
    };
  }
}
