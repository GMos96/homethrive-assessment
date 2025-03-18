import { Fieldset } from '@/components/ui/fieldset/fieldset';
import { ControlledInput } from '@/components/ui/input/input';
import { Form } from '@/components/ui/form/form';
import { FormField } from '@/components/ui/form/form-field';
import { SubmitButton } from '@/components/ui/form/submit-button';
import { useNavigate } from 'react-router';
import { API } from '@/modules/auth/service/auth.service';
import { useServerMutation } from '@/hooks/useServerMutation';
import type { LoginDTO } from '@/modules/auth/dto/login.dto';
import { useContext } from 'react';
import { AuthDispatchContext } from '@/core/context/auth.context';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, loading } = useServerMutation<LoginDTO>(API.login);
  const setAuthenticated = useContext(AuthDispatchContext);

  const login = (loginDTO: LoginDTO) => {
    mutate(loginDTO).then(() => {
      setAuthenticated(true);
      navigate('/care-recipient');
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
