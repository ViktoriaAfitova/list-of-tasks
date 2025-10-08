import { AddTodoForm } from '@features/add-todo';
import { TodoFilters } from '@features/filter-todos';
import { useTodoStore } from '@shared/lib';
import { TodoCounter } from '@widgets/todo-counter';
import { TodoList } from '@widgets/todo-list';
import { ListTodo } from 'lucide-react';

export const TodoListPage = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeCount,
  } = useTodoStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-4 px-3 sm:py-6 sm:px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-3 sm:space-y-4">
        <div className="text-center space-y-1 sm:space-y-2">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="p-2 rounded-lg bg-slate-800 text-white shadow-md">
              <ListTodo className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Список задач
            </h1>
          </div>
        </div>
        <AddTodoForm onAdd={addTodo} />
        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoCounter count={activeCount} />
      </div>
    </div>
  );
};
