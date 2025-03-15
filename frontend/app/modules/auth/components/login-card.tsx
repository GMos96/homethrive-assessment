import { LoginForm } from '@/modules/auth/components/login-form';
import { Card } from '@/components/ui/card/card';

export const LoginCard = () => {
  return (
    <Card minW="md" size="lg">
      <LoginForm></LoginForm>
    </Card>
  );
};
