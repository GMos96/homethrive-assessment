import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Medication } from './medication.entity';
import { MedicationService } from './medication.service';
import { CreateMedicationDTO } from './dto/create-medication.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('medication')
export class MedicationController {
  constructor(private medicationService: MedicationService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllMedications(@Req() request): Promise<Medication[]> {
    return this.medicationService.findAllByAccountId(request.user.userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMedication(
    @Req() request,
    @Body() medication: CreateMedicationDTO,
  ): Promise<void> {
    await this.medicationService.create({
      ...medication,
      accountId: request.user.userId,
    });
  }
}
