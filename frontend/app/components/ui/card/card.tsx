import { Card as ChakraCard, type CardRootProps } from '@chakra-ui/react';

type CardProps = CardRootProps;

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <ChakraCard.Root {...props}>
      <ChakraCard.Body>{children}</ChakraCard.Body>
    </ChakraCard.Root>
  );
};
