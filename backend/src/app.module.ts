import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { DATABASE_CONFIG } from './database/database-config';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, AccountModule, DATABASE_CONFIG(), ProfileModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
