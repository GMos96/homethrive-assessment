import { NumberInput as ChakraNumberInput } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormUtil } from '@/components/ui/form/util';
import type { WithFormFieldProps } from '@/components/ui/form/types';

export interface NumberInputProps extends ChakraNumberInput.RootProps {
  id: string;
}

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  NumberInputProps
>(function NumberInput(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraNumberInput.Root ref={ref} variant="outline" {...rest}>
      {children}
    </ChakraNumberInput.Root>
  );
});

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScrubber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;

type ControlledNumericInputProps = {
  fieldName: string;
} & ChakraNumberInput.RootProps &
  WithFormFieldProps;

export const ControlledNumericInput = ({
  fieldName,
  required,
  label,
}: ControlledNumericInputProps) => {
  const { register } = useFormContext();
  return (
    <NumberInputRoot id={`${fieldName}-numeric-input`}>
      <NumberInputField
        {...register(fieldName, {
          valueAsNumber: true,
          required: required && FormUtil.getFieldRequiredErrorMessage(label),
        })}
      ></NumberInputField>
    </NumberInputRoot>
  );
};
