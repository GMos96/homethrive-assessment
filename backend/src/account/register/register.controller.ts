import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDTO } from './register-user.dto';

@Controller('register')
export class RegisterController {

  constructor(private readonly registerService: RegisterService) {
  }

  @Post()
  async register(@Body() registerDTO: RegisterUserDTO): Promise<void> {
    return await this.registerService.registerAccount(registerDTO);
  }

}
