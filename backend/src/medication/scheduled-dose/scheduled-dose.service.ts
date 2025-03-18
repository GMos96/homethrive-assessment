import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduledDose } from './scheduled.dose.entity';
import { CreateScheduledDoseDTO } from './dto/create-scheduled-dose.dto';
import { ScheduleUnit } from './schedule-unit';

@Injectable()
export class ScheduledDoseService {
  constructor(
    @InjectRepository(ScheduledDose)
    private scheduledDoseRepository: Repository<ScheduledDose>,
  ) {}

  async create(scheduledDose: CreateScheduledDoseDTO) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.scheduledDoseRepository.save({
      ...scheduledDose,
      taken: false,
      dueDate: this.calculateScheduledDose(today, scheduledDose),
    });
  }

  async completeDose(medicationId: number, accountId: number): Promise<void> {
    const { scheduledUnit, scheduledValue, dueDate }: ScheduledDose =
      await this.scheduledDoseRepository.findOneByOrFail({
        accountId,
        medicationId,
        taken: false,
      });

    // mark old dose as taken
    await this.scheduledDoseRepository.update(
      { medicationId, accountId, taken: false },
      { taken: true },
    );

    // create new dose
    const dose: CreateScheduledDoseDTO = {
      scheduledUnit,
      scheduledValue,
      accountId,
      medicationId,
    };

    await this.scheduledDoseRepository.save({
      ...dose,
      dueDate: this.calculateScheduledDose(dueDate, dose),
      taken: false,
    });
  }

  calculateScheduledDose(
    date: Date,
    scheduledDose: CreateScheduledDoseDTO,
  ): Date {
    const { scheduledValue, scheduledUnit } = scheduledDose;

    switch (scheduledUnit) {
      case ScheduleUnit.DAY:
        const nextHour = Math.floor((1 / scheduledValue) * 24);
        date.setHours(date.getHours() + nextHour);
        return date;
      case ScheduleUnit.WEEK:
        const nextDay = Math.floor((1 / scheduledValue) * 7);
        date.setDate(date.getDate() + nextDay); // get the next possible day rounding down 'cause I said so
        return date;
    }
  }
}
