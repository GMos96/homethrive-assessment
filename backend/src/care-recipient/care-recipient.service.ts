import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CareRecipient } from './care-recipient.entity';
import { Repository } from 'typeorm';
import { CreateCareRecipientDTO } from './dto/create-care-recipient.dto';

@Injectable()
export class CareRecipientService {
  constructor(
    @InjectRepository(CareRecipient)
    private careRecipientRepository: Repository<CareRecipient>,
  ) {}

  async findAll(accountId: number): Promise<CareRecipient[]> {
    return await this.careRecipientRepository.find({
      where: { accountId },
    });
  }

  async findOneById(
    id: number,
    accountId: number,
  ): Promise<CareRecipient | null> {
    return await this.careRecipientRepository.findOneBy({ id, accountId });
  }

  async create(
    careRecipient: CreateCareRecipientDTO,
    accountId: number,
  ): Promise<CareRecipient> {
    return await this.careRecipientRepository.save({
      ...careRecipient,
      accountId,
    });
  }
}
