import { DosageUnit } from '../dosage-unit';
import { IsEnum, IsNotEmpty, IsPositive } from 'class-validator';
import { ScheduleUnit } from '../scheduled-dose/schedule-unit';

export class CreateMedicationDTO {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  dosage: number;

  @IsEnum(DosageUnit)
  dosageUnit: DosageUnit;

  @IsPositive()
  scheduledValue: number;

  @IsEnum(ScheduleUnit)
  scheduledUnit: ScheduleUnit;

  accountId: number;
}
