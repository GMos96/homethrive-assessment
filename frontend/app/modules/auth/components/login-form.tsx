import { Fieldset } from '@/components/ui/fieldset/fieldset';
import { ControlledInput } from '@/components/ui/input/input';
import { Form } from '@/components/ui/form/form';
import { FormField } from '@/components/ui/form/form-field';
import { SubmitButton } from '@/components/ui/form/submit-button';
import { useNavigate } from 'react-router';
import { API } from '@/modules/auth/service/auth.service';
import { usePost } from '@/hooks/usePost';
import type { LoginDTO } from '@/modules/auth/dto/login.dto';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { post, loading } = usePost<LoginDTO>(API.login);

  const login = (loginDTO: LoginDTO) => {
    post(loginDTO).then(() => {
      navigate('/');
    });
  };

  return (
    <Fieldset title="Login" subtitle="Please enter your credentials">
      <Form onSubmit={login}>
        <FormField label="Email Address">
          <ControlledInput fieldName="email"></ControlledInput>
        </FormField>

        <FormField label="Password">
          <ControlledInput fieldName="password"></ControlledInput>
        </FormField>

        <SubmitButton submitting={loading}></SubmitButton>
      </Form>
    </Fieldset>
  );
};
