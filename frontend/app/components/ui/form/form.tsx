import { FormProvider, useForm } from 'react-hook-form';
import type { PropsWithChildren } from 'react';

type FormProps<> = {
  onSubmit: (data: any) => void;
} & PropsWithChildren;

export const Form = ({ onSubmit, children }: FormProps) => {
  const methods = useForm();

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
