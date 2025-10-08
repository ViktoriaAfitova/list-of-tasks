import type { Todo } from '@entities/todo';
import type { ReactNode } from 'react';

import { Card } from '@shared/ui';

type Props = {
  todo: Todo;
  actionSlot?: ReactNode;
  checkboxSlot?: ReactNode;
};

export const TodoPreview = ({ todo, actionSlot, checkboxSlot }: Props) => {
  return (
    <Card className="group flex items-center gap-3 p-3 sm:p-4 transition-all duration-150 hover:border-slate-400 hover:shadow-md">
      {checkboxSlot}
      <span
        className={`flex-1 text-sm sm:text-base font-medium transition-all duration-150 break-words ${
          todo.completed ? 'text-slate-400 line-through' : 'text-slate-900'
        }`}
      >
        {todo.text}
      </span>
      {actionSlot}
    </Card>
  );
};
