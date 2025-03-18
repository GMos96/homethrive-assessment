import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateCareRecipientDTO } from './dto/create-care-recipient.dto';
import { CareRecipientService } from './care-recipient.service';
import { CareRecipient } from './care-recipient.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from '../common/request';

@Controller('care-recipient')
export class CareRecipientController {
  constructor(private readonly careRecipientService: CareRecipientService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() req: Request): Promise<CareRecipient[]> {
    return this.careRecipientService.findAll(req['user'].userId);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findOneById(@Req() req: Request, @Param('id') id: number) {
    return await this.careRecipientService.findOneById(id, req.user.userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() careRecipient: CreateCareRecipientDTO,
    @Req() req: Request,
  ): Promise<void> {
    return this.careRecipientService
      .create(careRecipient, req['user'].userId)
      .then(() => {});
  }
}
