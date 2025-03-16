import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medication } from './medication.entity';
import { Repository } from 'typeorm';
import { CreateMedicationDTO } from './dto/create-medication.dto';
import { ScheduledDoseService } from './scheduled-dose/scheduled-dose.service';

@Injectable()
export class MedicationService {
  constructor(
    @InjectRepository(Medication)
    private medicationRepository: Repository<Medication>,
    private scheduledDoseService: ScheduledDoseService,
  ) {}

  async findAllByAccountId(accountId: number): Promise<Medication[]> {
    return this.medicationRepository.findBy({ accountId });
  }

  async create(medication: CreateMedicationDTO): Promise<void> {
    const { name, dosage, dosageUnit, accountId } = medication;
    const { id } = await this.medicationRepository.save({
      name,
      dosage,
      dosageUnit,
      accountId,
    });
    const { scheduledUnit, scheduledValue } = medication;
    await this.scheduledDoseService.create({
      scheduledValue,
      scheduledUnit,
      accountId,
      medicationId: id,
    });
  }
}
