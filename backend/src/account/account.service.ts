import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateAccountDTO } from './create-account.dto';

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(Account) private readonly accountRepository: Repository<Account>
  ) {}

  async findAccountById(id: number): Promise<Account | null> {
    return await this.accountRepository.findOneBy({ id: id });
  }

  async findAccountByEmail(email: string): Promise<Account | null> {
    return await this.accountRepository.findOneBy({ email: email });
  }

  async createAccount(account: CreateAccountDTO): Promise<Omit<Account, 'password'>> {
    const existingAccount = await this.findAccountByEmail(account.email);
    if (existingAccount) {
      // TODO common validation exception
      throw new HttpException('Account already exists', HttpStatus.BAD_REQUEST);
    }
    return await this.accountRepository.save({
      ...account,
      password: bcrypt.hashSync(account.password, 10)
    }).then((account) => {
      const { password, ...result } = account;
      return result;
    }).catch(() => {
      throw new Error('Error creating account');
    });
  }

}
