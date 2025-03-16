import { Test, TestingModule } from '@nestjs/testing';
import { CareRecipientController } from './care-recipient.controller';

describe('CareRecipientController', () => {
  let controller: CareRecipientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareRecipientController],
    }).compile();

    controller = module.get<CareRecipientController>(CareRecipientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
