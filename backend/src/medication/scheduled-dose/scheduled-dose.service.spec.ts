import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledDoseService } from './scheduled-dose.service';
import { ScheduleUnit } from './schedule-unit';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ScheduledDose } from './scheduled.dose.entity';

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('ScheduledDoseService', () => {
  let service: ScheduledDoseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScheduledDoseService,
        {
          provide: getRepositoryToken(ScheduledDose),
          useClass: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ScheduledDoseService>(ScheduledDoseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have accurate schedule doses for 1 / day', () => {
    const date = new Date(2020, 1, 28, 0);
    const expectedDate = new Date(2020, 1, 29, 0);

    expect(
      service.calculateScheduledDose(date, {
        scheduledValue: 1,
        scheduledUnit: ScheduleUnit.DAY,
        accountId: 1,
        medicationId: 1,
      }),
    ).toEqual(expectedDate);
  });

  it('should have accurate schedule doses for 3 / day', () => {
    const date = new Date(2020, 1, 28, 0);
    const expectedDate = new Date(2020, 1, 28, 8);

    expect(
      service.calculateScheduledDose(date, {
        scheduledValue: 3,
        scheduledUnit: ScheduleUnit.DAY,
        accountId: 1,
        medicationId: 1,
      }),
    ).toEqual(expectedDate);

    const secondExpectedDate = new Date(2020, 1, 28, 16);
    expect(
      service.calculateScheduledDose(expectedDate, {
        scheduledValue: 3,
        scheduledUnit: ScheduleUnit.DAY,
        accountId: 1,
        medicationId: 1,
      }),
    ).toEqual(secondExpectedDate);
  });

  it('should have accurate schedule doses for 1 / week', () => {
    const date = new Date(2020, 1, 21, 0);
    const expectedDate = new Date(2020, 1, 28, 0);

    expect(
      service.calculateScheduledDose(date, {
        scheduledValue: 1,
        scheduledUnit: ScheduleUnit.WEEK,
        accountId: 1,
        medicationId: 1,
      }),
    ).toEqual(expectedDate);
  });

  it('should have accurate schedule doses for 3 / week', () => {
    const date = new Date(2020, 1, 21, 0);
    const expectedDate = new Date(2020, 1, 23, 0);

    expect(
      service.calculateScheduledDose(date, {
        scheduledValue: 3,
        scheduledUnit: ScheduleUnit.WEEK,
        accountId: 1,
        medicationId: 1,
      }),
    ).toEqual(expectedDate);
  });
});
