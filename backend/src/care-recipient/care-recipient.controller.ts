import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateCareRecipientDTO } from './dto/create-care-recipient.dto';
import { CareRecipientService } from './care-recipient.service';
import { CareRecipient } from './care-recipient.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('care-recipient')
export class CareRecipientController {
  constructor(private readonly careRecipientService: CareRecipientService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Request() req: Express.Request): Promise<CareRecipient[]> {
    return this.careRecipientService.findAll(req['user'].userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() careRecipient: CreateCareRecipientDTO,
    @Request() req: Express.Request,
  ): Promise<void> {
    return this.careRecipientService
      .create(careRecipient, req['user'].userId)
      .then(() => {});
  }
}
