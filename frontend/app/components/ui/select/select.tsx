import { Select as ChakraSelect, type SelectRootProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { useRef } from 'react';

export const Select = (props: SelectRootProps) => {
  return <ChakraSelect.Root {...props}>{props.children}</ChakraSelect.Root>;
};

type ControlledSelectProps = {
  fieldName: string;
} & SelectRootProps;

export const ControlledSelect = ({
  fieldName,
  ...props
}: ControlledSelectProps) => {
  const { register } = useFormContext();
  return (
    <Select id={`${fieldName}-select`} {...register(fieldName)} {...props}>
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>

      <ChakraSelect.Positioner>
        <ChakraSelect.Content>
          {props.collection.items.map((item) => (
            <ChakraSelect.Item item={item} key={item.value}>
              {item.label}
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </ChakraSelect.Content>
      </ChakraSelect.Positioner>
    </Select>
  );
};
