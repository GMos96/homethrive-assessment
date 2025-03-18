import {
  type ContainerProps as ChakraContainerProps,
  Container as ChakraContainer,
} from '@chakra-ui/react';

type ContainerProps = {
  centered?: boolean;
} & ChakraContainerProps;

export const Container = ({ children, ...props }: ContainerProps) => {
  return <ChakraContainer {...props}>{children}</ChakraContainer>;
};
