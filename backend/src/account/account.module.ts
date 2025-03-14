import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';

@Module({
  providers: [AccountService, RegisterService],
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [RegisterController],
  exports: [AccountService]
})
export class AccountModule {}
