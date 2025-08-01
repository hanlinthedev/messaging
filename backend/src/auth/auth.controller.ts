import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google/callback')
  async login(@Req() req: { user: any }, @Body('idToken') idToken: string) {
    return this.authService.login(req.user, idToken);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return {
      message: 'User profile retrieved successfully',
      data: req.user,
    };
  }
}
