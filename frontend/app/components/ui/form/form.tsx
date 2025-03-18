import { FormProvider, useForm } from 'react-hook-form';
import { type PropsWithChildren, useEffect } from 'react';
import type { ValidationError } from '@/lib/types';

type FormProps = {
  onSubmit: (data: any) => void;
  errors?: ValidationError[];
} & PropsWithChildren;

export const Form = ({ onSubmit, children, errors }: FormProps) => {
  const methods = useForm();

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => {
        methods.setError('root', {
          type: 'serverError',
          // @ts-ignore
          name: error.fieldName,
          message: error.errors?.join(' '),
        });
      });
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        {children}
      </form>
    </FormProvider>
  );
};
