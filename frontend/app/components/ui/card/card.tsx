import {
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  CardTitle as ChakraCardTitle,
  type CardHeaderProps,
  type CardRootProps,
} from '@chakra-ui/react';

type CardProps = CardRootProps;

export const Card = ({ children, ...props }: CardProps) => {
  return <ChakraCard.Root {...props}>{children}</ChakraCard.Root>;
};

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return (
    <ChakraCardHeader {...props}>
      <ChakraCardTitle>{children}</ChakraCardTitle>
    </ChakraCardHeader>
  );
};

export const CardBody = ChakraCard.Body;
export const CardFooter = ChakraCard.Footer;
