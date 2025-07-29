import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/googleOAuth.guard';
import { JwtAuthGuard } from './guards/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async googleAuth() {
    // Initiates the Google OAuth flow
    return { message: 'Google OAuth flow initiated' };
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async login(@Req() req, @Res() res) {
    const data = await this.authService.login(req.user);
    return {
      message: 'Logged in successfully',
      data,
    };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    return {
      message: 'User profile retrieved successfully',
      user: req.user,
    };
  }
}
