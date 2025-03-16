import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Medication } from './medication.entity';
import { MedicationService } from './medication.service';
import { CreateMedicationDTO } from './dto/create-medication.dto';

@Controller('medication')
export class MedicationController {
  constructor(private medicationService: MedicationService) {}

  @Get()
  async getAllMedications(@Req() request): Promise<Medication[]> {
    return this.medicationService.findAllByAccountId(request.user.sub);
  }

  @Post()
  async createMedication(
    @Req() request,
    @Body() medication: CreateMedicationDTO,
  ): Promise<void> {
    await this.medicationService.create({
      ...medication,
      accountId: request.user.sub,
    });
  }
}
