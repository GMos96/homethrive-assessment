import { Input as ChakraInput, type InputProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export const Input = (props: InputProps) => {
  return <ChakraInput {...props} />;
};

type ControlledInputProps = {
  fieldName: string;
};

export const ControlledInput = ({ fieldName }: ControlledInputProps) => {
  const { register } = useFormContext();
  return <Input id={`${fieldName}-input`} {...register(fieldName)} />;
};
