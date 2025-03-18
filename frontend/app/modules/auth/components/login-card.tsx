import { LoginForm } from '@/modules/auth/components/login-form';
import { Card, CardBody } from '@/components/ui/card/card';

export const LoginCard = () => {
  return (
    <Card minW="md" maxW="lg" size="lg">
      <CardBody>
        <LoginForm></LoginForm>
      </CardBody>
    </Card>
  );
};
