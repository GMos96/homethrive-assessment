import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as process from 'node:process';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService
  ) {}

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.accountService.findAccountByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { email: user.email, sub: user.id };
      return {
        accessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET_KEY }),
      };
    }

    throw new UnauthorizedException('Invalid email or password');
  }
}
