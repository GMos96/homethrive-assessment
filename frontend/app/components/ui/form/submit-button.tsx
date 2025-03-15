import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
  submitting?: boolean;
};

export const SubmitButton = ({ submitting }: SubmitButtonProps) => {
  return (
    <Button type="submit" colorScheme="blue" loading={submitting}>
      Submit
    </Button>
  );
};
