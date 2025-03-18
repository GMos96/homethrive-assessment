import { createListCollection } from '@chakra-ui/react';

export const MedicationConstants = {
  dosageUnits: createListCollection({
    items: [{ label: 'MG', value: 'mg' }],
  }),
  frequencyUnits: createListCollection({
    items: [
      { label: 'Daily', value: 'day' },
      { label: 'Weekly', value: 'week' },
    ],
  }),
} as const;
