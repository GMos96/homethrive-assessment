import { CreateAccountDTO } from '../create-account.dto';

export class RegisterUserDTO extends CreateAccountDTO {
  firstName?: string;
  lastName?: string;
}