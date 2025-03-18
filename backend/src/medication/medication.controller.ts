import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Medication } from './medication.entity';
import { MedicationService } from './medication.service';
import { CreateMedicationDTO } from './dto/create-medication.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from '../auth/request';

@Controller('medication')
export class MedicationController {
  constructor(private medicationService: MedicationService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllMedications(
    @Req() request: Request,
    @Query('careRecipientId') careRecipientId: number,
  ): Promise<Medication[]> {
    return this.medicationService.findAllByCareRecipient(
      careRecipientId,
      request.user.userId,
    );
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMedication(
    @Req() request: Request,
    @Body() medication: CreateMedicationDTO,
  ): Promise<void> {
    await this.medicationService.create({
      ...medication,
      accountId: request.user.userId,
    });
  }

  @Patch('/:id/active')
  @UseGuards(JwtAuthGuard)
  async updateMedication(
    @Req() request: Request,
    @Param('id') id: number,
    @Body() { active }: { active: boolean },
  ): Promise<void> {
    return this.medicationService.updateActiveStatus(
      id,
      active,
      request.user.userId,
    );
  }

  @Post('/:id/scheduled-dose')
  @UseGuards(JwtAuthGuard)
  async completeDose(
    @Req() request: Request,
    @Param('id') medicationId: number,
  ): Promise<void> {
    await this.medicationService.completeDose(
      +medicationId,
      request.user.userId,
    );
  }
}
