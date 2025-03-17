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
    return this.medicationRepository
      .createQueryBuilder('medication')
      .leftJoinAndSelect('medication.scheduledDoses', 'scheduledDose')
      .where('medication.accountId = :accountId', { accountId })
      .andWhere('scheduledDose.taken = false')
      .getMany();
  }

  async create(medication: CreateMedicationDTO): Promise<void> {
    const { name, dosage, dosageUnit, accountId } = medication;
    const { id } = await this.medicationRepository.save({
      name,
      dosage,
      dosageUnit,
      accountId,
      active: true,
    });
    const { scheduledUnit, scheduledValue } = medication;
    await this.scheduledDoseService.create({
      scheduledValue,
      scheduledUnit,
      accountId,
      medicationId: id,
    });
  }

  async updateActiveStatus(
    medicationId: number,
    status: boolean,
    accountId: number,
  ): Promise<void> {
    await this.medicationRepository.update(medicationId, {
      active: status,
      accountId,
    });
  }

  async completeDose(medicationId: number, accountId: number): Promise<void> {
    await this.scheduledDoseService.completeDose(medicationId, accountId);
  }
}
