import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  type PropsWithChildren,
  type ReactNode,
  useRef,
  useState,
} from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { DialogContent } from '@/components/ui/dialog/dialog';
import { ModalProvider } from '@/providers/modal.provider';

type DialogButtonProps = PropsWithChildren & { open?: boolean };

const DialogButtonRoot = ({ children, open }: DialogButtonProps) => {
  const [_open, setOpen] = useState(open);

  return (
    <DialogRoot open={_open} onOpenChange={({ open }) => setOpen(open)}>
      {children}
    </DialogRoot>
  );
};

const DialogButtonTemplate = ({ children }: PropsWithChildren) => {
  return (
    <DialogTrigger asChild>
      <Button>{children}</Button>
    </DialogTrigger>
  );
};

type DialogProps = {
  title: string | ReactNode;
} & PropsWithChildren;

const Dialog = ({ children, title }: DialogProps) => {
  const portalRef = useRef<HTMLDivElement>(null);

  return (
    <DialogContent ref={portalRef}>
      <ModalProvider ref={portalRef}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogCloseTrigger />
      </ModalProvider>
    </DialogContent>
  );
};

const DialogActionButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <DialogActionTrigger asChild>
      <Button {...rest}>{children}</Button>
    </DialogActionTrigger>
  );
};

export const DialogButton = {
  Root: DialogButtonRoot,
  Button: DialogButtonTemplate,
  Dialog: Dialog,
  ActionButton: DialogActionButton,
};
