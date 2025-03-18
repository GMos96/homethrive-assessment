import { useState, type PropsWithChildren, useEffect } from 'react';
import { Field as ChakraFormField, Show } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

type FormFieldProps = {
  label?: string;
  fieldName: string;
} & PropsWithChildren;

export const FormField = ({ children, fieldName, label }: FormFieldProps) => {
  const {
    getFieldState,
    formState: { errors },
  } = useFormContext();
  const { invalid } = getFieldState(fieldName);

  const hasError = errors?.root?.name === fieldName;

  return (
    <ChakraFormField.Root invalid={invalid || hasError}>
      {label && <ChakraFormField.Label>{label}</ChakraFormField.Label>}
      {children}
      <Show when={hasError}>
        <ChakraFormField.ErrorText>
          {errors.root?.message}
        </ChakraFormField.ErrorText>
      </Show>
    </ChakraFormField.Root>
  );
};
