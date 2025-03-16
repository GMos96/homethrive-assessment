import { ContainerRefContext } from '@/core/context/container-ref.context';
import type { PropsWithChildren, RefObject } from 'react';

type Props = {
  ref: RefObject<HTMLDivElement | null>;
} & PropsWithChildren;

export const ModalProvider = ({ children, ref }: Props) => {
  return (
    <ContainerRefContext.Provider value={ref as RefObject<HTMLElement>}>
      {children}
    </ContainerRefContext.Provider>
  );
};
