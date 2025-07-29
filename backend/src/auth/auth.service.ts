import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject() private usersService: UserService,
    @Inject() private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const newUser = await this.usersService.create(user);
    console.log(newUser);
    const payload = { username: newUser.email, sub: newUser._id };
    const token = this.jwtService.sign(payload);
    console.log(token);
    return {
      access_token: token,
    };
  }
}
