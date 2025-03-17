import { Stack as ChakraStack, type StackProps } from '@chakra-ui/react';

export const Stack = ({ alignItems = 'stretch', ...props }: StackProps) => {
  return <ChakraStack alignItems={alignItems} {...props} />;
};
