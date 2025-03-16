import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduledDoseEntity } from './scheduled-dose.entity';
import { CreateScheduledDoseDTO } from './dto/create-scheduled-dose.dto';

@Injectable()
export class ScheduledDoseService {
  constructor(
    @InjectRepository(ScheduledDoseEntity)
    private scheduledDoseRepository: Repository<ScheduledDoseEntity>,
  ) {}

  async create(scheduledDose: CreateScheduledDoseDTO) {
    return this.scheduledDoseRepository.save(scheduledDose);
  }
}
