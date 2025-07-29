import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    @Inject() private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const newUser = await this.usersService.create(user);
    const payload = { username: newUser.email, sub: newUser._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
