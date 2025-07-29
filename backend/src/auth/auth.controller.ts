import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/googleOAuth.guard';
import { JwtAuthGuard } from './guards/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(GoogleOauthGuard)
  googleAuth() {
    return { message: 'Google OAuth flow initiated' };
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async login(@Req() req: { user: any }, @Res() res) {
    const data = await this.authService.login(req.user);
    return res.json({
      message: 'Login Success!',
      data,
    });
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return {
      message: 'User profile retrieved successfully',
      user: req.user,
    };
  }
}
