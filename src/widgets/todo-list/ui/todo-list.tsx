import type { Todo } from '@entities/todo';
import type { FilterType } from '@features/filter-todos';

import { TodoPreview } from '@entities/todo';
import { DeleteTodoButton } from '@features/delete-todo';
import { FILTER_TYPES } from '@features/filter-todos';
import { ToggleTodoCheckbox } from '@features/toggle-todo';

type Props = {
  todos: Array<Todo>;
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoList = ({ todos, filter, onToggle, onDelete }: Props) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 rounded-lg bg-white border border-slate-200">
        <p className="text-sm sm:text-base font-semibold text-slate-400 uppercase tracking-wide">
          {filter === FILTER_TYPES.ACTIVE && 'Нет активных задач'}
          {filter === FILTER_TYPES.COMPLETED && 'Нет выполненных задач'}
          {filter === FILTER_TYPES.ALL && 'Задач пока нет'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoPreview
          key={todo.id}
          todo={todo}
          checkboxSlot={
            <ToggleTodoCheckbox
              id={todo.id}
              completed={todo.completed}
              onToggle={onToggle}
            />
          }
          actionSlot={<DeleteTodoButton id={todo.id} onDelete={onDelete} />}
        />
      ))}
    </div>
  );
};
