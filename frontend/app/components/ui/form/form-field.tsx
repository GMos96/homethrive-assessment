import { type PropsWithChildren } from 'react';
import { Field as ChakraFormField } from '@chakra-ui/react';

type FormFieldProps = {
  label?: string;
} & PropsWithChildren;

export const FormField = ({ children, label }: FormFieldProps) => {
  return (
    <ChakraFormField.Root>
      {label && <ChakraFormField.Label>{label}</ChakraFormField.Label>}
      {children}
    </ChakraFormField.Root>
  );
};
