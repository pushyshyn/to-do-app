import { Todo } from '../types/Todo';
import { Filter } from '../types/Filter';

export const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case Filter.Active:
      return todos.filter(todo => !todo.completed);
    case Filter.Completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
