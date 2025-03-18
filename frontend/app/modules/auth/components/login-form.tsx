import { Fieldset } from '@/components/ui/fieldset/fieldset';
import { ControlledInput } from '@/components/ui/input/input';
import { Form } from '@/components/ui/form/form';
import { FormField } from '@/components/ui/form/form-field';
import { SubmitButton } from '@/components/ui/form/submit-button';
import { useNavigate } from 'react-router';
import { API } from '@/modules/auth/service/auth.service';
import { useServerMutation } from '@/hooks/useServerMutation';
import type { LoginDTO } from '@/modules/auth/dto/login.dto';
import { useContext, useState } from 'react';
import { AuthDispatchContext } from '@/core/context/auth.context';
import { toaster } from '@/components/ui/toaster';
import type { NestError, ValidationError } from '@/lib/types';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, loading } = useServerMutation<LoginDTO>(API.login);
  const setAuthenticated = useContext(AuthDispatchContext);
  const [errors, setErrors] = useState<ValidationError[]>();

  const login = (loginDTO: LoginDTO) => {
    mutate(loginDTO).then(
      () => {
        setAuthenticated(true);
        navigate('/care-recipient');
      },
      (error: NestError<ValidationError[] | string>) => {
        if (
          error.error === 'Validation Error' &&
          typeof error.message === 'object'
        ) {
          setErrors(error.message);
        } else {
          toaster.create({
            description: error.message as string,
            type: 'error',
          });
        }
      },
    );
  };

  return (
    <Fieldset title="Login" subtitle="Please enter your credentials">
      <Form onSubmit={login} errors={errors}>
        <FormField label="Email Address" fieldName="email" required>
          <ControlledInput></ControlledInput>
        </FormField>

        <FormField label="Password" fieldName="password" required>
          <ControlledInput type="password"></ControlledInput>
        </FormField>

        <SubmitButton submitting={loading}></SubmitButton>
      </Form>
    </Fieldset>
  );
};
