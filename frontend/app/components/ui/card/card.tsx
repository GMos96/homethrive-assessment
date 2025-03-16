import { Card as ChakraCard, type CardRootProps } from '@chakra-ui/react';

type CardProps = CardRootProps;

export const Card = ({ children, ...props }: CardProps) => {
  return <ChakraCard.Root {...props}>{children}</ChakraCard.Root>;
};

export const CardBody = ChakraCard.Body;
export const CardHeader = ChakraCard.Header;
export const CardFooter = ChakraCard.Footer;
