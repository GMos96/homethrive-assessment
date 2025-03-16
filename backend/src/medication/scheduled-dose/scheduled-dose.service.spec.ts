import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledDoseService } from './scheduled-dose.service';

describe('ScheduledDoseService', () => {
  let service: ScheduledDoseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduledDoseService],
    }).compile();

    service = module.get<ScheduledDoseService>(ScheduledDoseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
