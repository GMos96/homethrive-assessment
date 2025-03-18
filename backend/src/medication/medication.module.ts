import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { MedicationController } from './medication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './medication.entity';
import { ScheduledDose } from './scheduled-dose/scheduled.dose.entity';
import { ScheduledDoseService } from './scheduled-dose/scheduled-dose.service';

@Module({
  providers: [MedicationService, ScheduledDoseService],
  controllers: [MedicationController],
  imports: [TypeOrmModule.forFeature([Medication, ScheduledDose])],
})
export class MedicationModule {}
