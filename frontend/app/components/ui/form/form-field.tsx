import { Children, cloneElement, type ReactElement } from 'react';
import { Field as ChakraFormField, Show } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import type { WithFormFieldProps } from '@/components/ui/form/types';

type FormFieldProps = {
  label?: string;
  children: ReactElement<WithFormFieldProps>;
} & WithFormFieldProps;

export const FormField = ({ children, ...props }: FormFieldProps) => {
  const { fieldName, required, label } = props as Required<WithFormFieldProps>;

  const {
    getFieldState,
    formState: { errors },
  } = useFormContext();
  const { invalid } = getFieldState(fieldName);
  const hasServerError = errors?.root?.name === fieldName;

  const fieldComponent = () => {
    return Children.map(children, (child) => {
      return cloneElement(child, {
        fieldName: fieldName,
        required: required,
        label: label,
      });
    });
  };

  return (
    <ChakraFormField.Root invalid={invalid || hasServerError}>
      {label && <ChakraFormField.Label>{label}</ChakraFormField.Label>}
      {fieldComponent()}
      <Show when={hasServerError}>
        <ChakraFormField.ErrorText>
          {errors.root?.message}
        </ChakraFormField.ErrorText>
      </Show>
      <ErrorMessage
        errors={errors}
        name={fieldName}
        as={ChakraFormField.ErrorText}
      ></ErrorMessage>
    </ChakraFormField.Root>
  );
};
