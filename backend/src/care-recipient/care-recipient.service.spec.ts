import { Test, TestingModule } from '@nestjs/testing';
import { CareRecipientService } from './care-recipient.service';

describe('CareRecipientService', () => {
  let service: CareRecipientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareRecipientService],
    }).compile();

    service = module.get<CareRecipientService>(CareRecipientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
