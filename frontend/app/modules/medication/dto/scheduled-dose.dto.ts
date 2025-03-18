export type ScheduledDoseDTO = {
  id: number;
  scheduledValue: number;
  scheduledUnit: 'day' | 'week';
  taken: boolean;
  dueDate: Date;
  medicationId: number;
};
