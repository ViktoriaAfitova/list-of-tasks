import type { Todo } from '@entities/todo';
import type { FilterType } from '@shared/types';

import { FILTER_TYPES } from '@shared/types';
import { useCallback } from 'react';

import { useLocalStorage } from '../use-local-storage';
import { FILTER_STORAGE_KEY, TODOS_STORAGE_KEY } from './constants';

export const useTodoStore = () => {
  const [todos, setTodos] = useLocalStorage<Array<Todo>>(TODOS_STORAGE_KEY, []);

  const [filterValue, setFilterValue] = useLocalStorage<FilterType>(
    FILTER_STORAGE_KEY,
    FILTER_TYPES.ALL
  );

  const filter = filterValue;
  const setFilter = setFilterValue;

  const addTodo = useCallback(
    (text: string) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      setTodos(prev => [...prev, newTodo]);
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    },
    [setTodos]
  );

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTER_TYPES.ACTIVE) return !todo.completed;
    if (filter === FILTER_TYPES.COMPLETED) return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  return {
    todos: filteredTodos,
    allTodos: todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeCount,
  };
};
