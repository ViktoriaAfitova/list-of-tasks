export const FILTER_TYPES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export type FilterType = (typeof FILTER_TYPES)[keyof typeof FILTER_TYPES];
