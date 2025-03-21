import { Dialog as ChakraDialog, Portal } from '@chakra-ui/react';
import { CloseButton } from './close-button';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { type SubmitButtonProps } from '@/components/ui/form/submit-button';
import { useFormContext } from 'react-hook-form';

interface DialogContentProps extends ChakraDialog.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <ChakraDialog.Backdrop />}
      <ChakraDialog.Positioner>
        <ChakraDialog.Content ref={ref} {...rest}>
          {children}
        </ChakraDialog.Content>
      </ChakraDialog.Positioner>
    </Portal>
  );
});

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDialog.CloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
  return (
    <ChakraDialog.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref}>
        {props.children}
      </CloseButton>
    </ChakraDialog.CloseTrigger>
  );
});

export const DialogCancelButton = () => (
  <DialogActionTrigger asChild>
    <Button variant="outline" colorPalette="black">
      Cancel
    </Button>
  </DialogActionTrigger>
);

export const DialogSubmitButton = ({ submitting }: SubmitButtonProps) => {
  const { formState } = useFormContext();

  return (
    <DialogActionTrigger asChild>
      <Button
        type="submit"
        colorScheme="blue"
        loading={submitting}
        disabled={!formState.isValid}
      >
        Submit
      </Button>
    </DialogActionTrigger>
  );
};

export const DialogRoot = ChakraDialog.Root;
export const DialogHeader = ChakraDialog.Header;
export const DialogBody = ChakraDialog.Body;
export const DialogTitle = ChakraDialog.Title;
export const DialogTrigger = ChakraDialog.Trigger;
export const DialogActionTrigger = ChakraDialog.ActionTrigger;
