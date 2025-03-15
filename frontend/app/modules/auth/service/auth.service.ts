import type { LoginDTO } from '@/modules/auth/dto/login.dto';
import { post } from '@/utils/fetch-util';

const loginAction = async (login: LoginDTO) => {
  const { accessToken } = await post<{ accessToken: string }>(
    '/auth/login',
    login,
    { type: 'public' },
  );
  localStorage.setItem('auth-token', accessToken);
};

export const API = {
  login: loginAction,
};
