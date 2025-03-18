import { FormProvider, useForm } from 'react-hook-form';
import { type PropsWithChildren, useEffect } from 'react';

type FormProps<> = {
  onSubmit: (data: any) => void;
  errors?: { fieldName: string; errors: string[] }[];
} & PropsWithChildren;

export const Form = ({ onSubmit, children, errors }: FormProps) => {
  const methods = useForm();

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => {
        methods.setError('root', {
          type: 'serverError',
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
