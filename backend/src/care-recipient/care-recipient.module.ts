import { Module } from '@nestjs/common';
import { CareRecipientService } from './care-recipient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareRecipient } from './care-recipient.entity';
import { CareRecipientController } from './care-recipient.controller';

@Module({
  providers: [CareRecipientService],
  imports: [TypeOrmModule.forFeature([CareRecipient])],
  controllers: [CareRecipientController],
})
export class CareRecipientModule {}
