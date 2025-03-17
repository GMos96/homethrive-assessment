'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  type SystemContext,
} from '@chakra-ui/react';
import { type ColorModeProviderProps } from '@/components/ui/color-mode';

export function Provider(props: ColorModeProviderProps) {
  const system: SystemContext = createSystem(defaultConfig, {});

  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}
