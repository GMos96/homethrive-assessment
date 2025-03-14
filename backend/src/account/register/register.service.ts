import { Injectable } from '@nestjs/common';
import { AccountService } from '../account.service';
import { RegisterUserDTO } from './register-user.dto';

@Injectable()
export class RegisterService {
  constructor(private readonly accountService: AccountService) {}

  async registerAccount(account: RegisterUserDTO): Promise<void> {
    await this.accountService.createAccount(account);
    const { firstName, lastName } = account;
    if (firstName || lastName) {
      // TODO: create the profile
    }
  }
}
