import { Body, Controller, Get, Post, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequest: LoginRequest): Promise<{ accessToken: string }> {
    return this.authService.login(loginRequest.email, loginRequest.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


}
