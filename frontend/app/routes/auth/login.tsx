import { LoginCard } from '@/modules/auth/components/login-card';
import { Stack } from '@chakra-ui/react';

const Login = () => {
  return (
    <Stack justifyContent="center" alignItems="center" minH="2xl">
      <LoginCard></LoginCard>
    </Stack>
  );
};

export default Login;
