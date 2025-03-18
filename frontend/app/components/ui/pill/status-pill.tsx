import { Badge } from '@chakra-ui/react';

type Props = {
  status: boolean;
};

export const StatusPill = ({ status }: Props) => {
  const { colorScheme } = status
    ? StatusPillScheme.ACTIVE
    : StatusPillScheme.INACTIVE;
  return (
    <Badge size="lg" colorPalette={colorScheme}>
      {status ? 'Active' : 'Inactive'}
    </Badge>
  );
};

const StatusPillScheme = {
  ACTIVE: { colorScheme: 'green', variant: 'solid' },
  INACTIVE: { colorScheme: 'grey', variant: 'outline' },
};
