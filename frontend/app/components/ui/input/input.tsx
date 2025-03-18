import { Input as ChakraInput, type InputProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import type { WithFormFieldProps } from '@/components/ui/form/types';
import { FormUtil } from '@/components/ui/form/util';

export const Input = (props: InputProps) => {
  return <ChakraInput {...props} />;
};

type ControlledInputProps = {} & InputProps & WithFormFieldProps;

export const ControlledInput = ({
  required,
  label,
  ...props
}: ControlledInputProps) => {
  const { register } = useFormContext();
  const { fieldName, ...rest } = props as Required<WithFormFieldProps>;

  return (
    <Input
      id={`${fieldName}-input`}
      {...register(fieldName, {
        required: required && FormUtil.getFieldRequiredErrorMessage(label),
      })}
      {...rest}
    />
  );
};
