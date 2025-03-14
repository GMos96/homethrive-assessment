import { Test, TestingModule } from '@nestjs/testing';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { RegisterUserDTO } from './register-user.dto';

describe('RegisterController', () => {
  let controller: RegisterController;
  let service: RegisterService;

  const mockRegisterService = {
    registerAccount: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterController],
      providers: [
        {
          provide: RegisterService,
          useValue: mockRegisterService,
        },
      ],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
    service = module.get<RegisterService>(RegisterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call registerAccount on registerService with correct parameters', async () => {
    const registerDTO: RegisterUserDTO = { email: 'testuser', password: 'testpass' };
    await controller.register(registerDTO);
    expect(service.registerAccount).toHaveBeenCalledWith(registerDTO);
  });

  it('should handle errors thrown by registerService.registerAccount', async () => {
    const registerDTO: RegisterUserDTO = { email: 'testuser', password: 'testpass' };
    mockRegisterService.registerAccount.mockRejectedValue(new Error('Error registering account'));
    await expect(controller.register(registerDTO)).rejects.toThrow('Error registering account');
  });
});