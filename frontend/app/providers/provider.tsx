'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  type SystemContext,
} from '@chakra-ui/react';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from '@/components/ui/color-mode';

export function Provider(props: ColorModeProviderProps) {
  const system: SystemContext = createSystem(defaultConfig, {
    disableLayers: true,
  });

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
