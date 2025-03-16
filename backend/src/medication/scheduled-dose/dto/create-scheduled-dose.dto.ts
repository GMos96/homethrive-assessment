import { IsEnum, IsPositive } from 'class-validator';
import { ScheduleUnit } from '../schedule-unit';

export class CreateScheduledDoseDTO {
  @IsPositive()
  scheduledValue: number;

  @IsEnum(ScheduleUnit)
  scheduledUnit: ScheduleUnit;

  accountId: number;
  medicationId: number;
}
