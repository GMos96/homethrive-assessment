'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  type SystemContext,
} from '@chakra-ui/react';
import { type ColorModeProviderProps } from '@/components/ui/color-mode';
import { AuthProvider } from '@/providers/auth.provider';

export function Provider(props: ColorModeProviderProps) {
  const system: SystemContext = createSystem(defaultConfig, {});

  return (
    <AuthProvider>
      <ChakraProvider value={system}>{props.children}</ChakraProvider>
    </AuthProvider>
  );
}
