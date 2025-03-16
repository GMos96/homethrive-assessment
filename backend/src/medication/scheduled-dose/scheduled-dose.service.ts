import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduledDoseEntity } from './scheduled-dose.entity';
import { CreateScheduledDoseDTO } from './dto/create-scheduled-dose.dto';
import { ScheduleUnit } from './schedule-unit';

@Injectable()
export class ScheduledDoseService {
  constructor(
    @InjectRepository(ScheduledDoseEntity)
    private scheduledDoseRepository: Repository<ScheduledDoseEntity>,
  ) {}

  async create(scheduledDose: CreateScheduledDoseDTO) {
    return this.scheduledDoseRepository.save({
      ...scheduledDose,
      taken: false,
      dueDate: this.calculateScheduledDose(scheduledDose),
    });
  }

  private calculateScheduledDose(scheduledDose: CreateScheduledDoseDTO): Date {
    const { scheduledValue, scheduledUnit } = scheduledDose;
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Reset time to midnight

    switch (scheduledUnit) {
      case ScheduleUnit.DAY:
        return now;
      case ScheduleUnit.WEEK:
        const nextDay = Math.floor(scheduledValue / 7);
        now.setDate(now.getDate() + nextDay); // get the next possible day rounding down cause I said so
        return now;
    }
  }
}
