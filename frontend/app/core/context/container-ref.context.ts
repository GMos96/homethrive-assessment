import { createContext, type RefObject } from 'react';

export const ContainerRefContext = createContext<
  RefObject<HTMLElement> | undefined
>(undefined);
