import { Button, Card } from '@shared/ui';

import type { FilterType } from '../model';

import { FILTER_TYPES } from '../model';

type Props = {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

const filters: { value: FilterType; label: string }[] = [
  { value: FILTER_TYPES.ALL, label: 'ВСЕ' },
  { value: FILTER_TYPES.ACTIVE, label: 'АКТИВНЫЕ' },
  { value: FILTER_TYPES.COMPLETED, label: 'ВЫПОЛНЕННЫЕ' },
];

export const TodoFilters = ({ currentFilter, onFilterChange }: Props) => {
  return (
    <Card className="flex gap-1.5 sm:gap-2 flex-wrap justify-center p-3 sm:p-4">
      {filters.map(filter => (
        <Button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          variant={currentFilter === filter.value ? 'primary' : 'secondary'}
          size="sm"
          className="
            flex-1 sm:flex-none min-w-0
            text-[clamp(10px,2.5vw,14px)]
            px-[clamp(6px,2vw,16px)]
          "
        >
          {filter.label}
        </Button>
      ))}
    </Card>
  );
};
