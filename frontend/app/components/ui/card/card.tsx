import {
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  type CardHeaderProps,
  type CardRootProps,
  CardTitle as ChakraCardTitle,
} from '@chakra-ui/react';

type CardProps = CardRootProps;

export const Card = ({
  children,
  variant = 'elevated',
  borderRadius = '1rem',
  ...props
}: CardProps) => {
  return (
    <ChakraCard.Root variant={variant} borderRadius={borderRadius} {...props}>
      {children}
    </ChakraCard.Root>
  );
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
