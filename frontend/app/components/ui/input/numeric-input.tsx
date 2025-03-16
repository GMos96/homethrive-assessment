import { NumberInput as ChakraNumberInput } from '@chakra-ui/react';
import React from 'react';
import { Input } from '@/components/ui/input/input';
import { useFormContext } from 'react-hook-form';

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
};

export const ControlledNumericInput = ({
  fieldName,
}: ControlledNumericInputProps) => {
  const { register } = useFormContext();
  return (
    <NumberInputRoot id={`${fieldName}-input`}>
      <NumberInputField
        {...register(fieldName, { valueAsNumber: true })}
      ></NumberInputField>
    </NumberInputRoot>
  );
};
