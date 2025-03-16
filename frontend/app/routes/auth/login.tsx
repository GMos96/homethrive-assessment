import { Container } from '@/components/ui/container/container';
import { LoginCard } from '@/modules/auth/components/login-card';

const Login = () => {
  return (
    <Container centered={true}>
      <LoginCard></LoginCard>
    </Container>
  );
};

export default Login;
