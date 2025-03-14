import { Test, TestingModule } from '@nestjs/testing';
import { RegisterService } from './register.service';
import { AccountService } from '../account.service';
import { RegisterUserDTO } from './register-user.dto';

describe('RegisterService', () => {
  let service: RegisterService;
  let accountService: AccountService;

  const mockAccountService = {
    createAccount: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterService,
        {
          provide: AccountService,
          useValue: mockAccountService,
        },
      ],
    }).compile();

    service = module.get<RegisterService>(RegisterService);
    accountService = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call createAccount on accountService with correct parameters', async () => {
    const account: RegisterUserDTO = { email: 'testuser@gmail.com', password: 'testpass', firstName: 'first', lastName: 'last' };
    await service.registerAccount(account);
    expect(accountService.createAccount).toHaveBeenCalledWith(account);
  });
});