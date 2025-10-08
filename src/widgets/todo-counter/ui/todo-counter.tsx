import { Card } from '@shared/ui';

type Props = {
  count: number;
};

export const TodoCounter = ({ count }: Props) => {
  return (
    <Card className="border-2 border-slate-300 text-center p-3 sm:p-4">
      <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
        Осталось задач:{' '}
        <span className="text-xl sm:text-2xl font-black text-slate-900">
          {count}
        </span>
      </p>
    </Card>
  );
};
