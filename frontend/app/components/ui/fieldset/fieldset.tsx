import { Fieldset as ChakraFieldset } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { Stack } from '@/components/ui/stack/stack';

type FieldsetProps = {
  title?: string;
  subtitle?: string;
} & PropsWithChildren;

export const Fieldset = ({ children, title, subtitle }: FieldsetProps) => {
  return (
    <ChakraFieldset.Root size="lg" maxW="md">
      <Stack>
        {title && <FieldSetLegend title={title} />}
        {subtitle && <FieldsetDescription subtitle={subtitle} />}
      </Stack>
      <ChakraFieldset.Content>{children}</ChakraFieldset.Content>
    </ChakraFieldset.Root>
  );
};

type FieldsetLegendProps = {
  title?: string;
};

const FieldSetLegend = ({ title }: FieldsetLegendProps) => {
  return <ChakraFieldset.Legend>{title}</ChakraFieldset.Legend>;
};

type FieldsetDescriptionProps = {
  subtitle?: string;
};

const FieldsetDescription = ({ subtitle }: FieldsetDescriptionProps) => {
  return <ChakraFieldset.HelperText>{subtitle}</ChakraFieldset.HelperText>;
};
