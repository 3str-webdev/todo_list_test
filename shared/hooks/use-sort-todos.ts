import { useAppSelector } from "./redux-hooks";

export const useSortTodos = () => {
  const todos = useAppSelector((store) => store.todosReducer.todos);

  console.log(todos);

  if (todos.length < 2) return todos;

  const sortedTodos = [...todos].sort((a, b) => b.priority - a.priority);

  return sortedTodos;
};
