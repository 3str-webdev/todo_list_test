import { useEffect, useState } from "react";
import { TodoModel } from "../types";
import { useAppSelector } from "./redux-hooks";
import { useSortTodos } from "./use-sort-todos";

const showCompletedTodos = (todo: TodoModel): boolean => {
  return todo.isCompleted;
};
const showUncompletedTodos = (todo: TodoModel): boolean => {
  return !todo.isCompleted;
};
const showAllTodos = () => {
  return true;
};

export interface FilterFunctions {
  all: (todo: TodoModel) => boolean;
  completed: (todo: TodoModel) => boolean;
  uncompleted: (todo: TodoModel) => boolean;
}

export const useFilterTodos = () => {
  const sortedTodos = useSortTodos();
  const [isShowTodo, setIsShowTodo] = useState<(todo: TodoModel) => boolean>(
    () => showAllTodos
  );

  const filteredTodos = sortedTodos.filter(isShowTodo);

  const filterFunctions: FilterFunctions = {
    all: showAllTodos,
    completed: showCompletedTodos,
    uncompleted: showUncompletedTodos,
  };

  const changeIsShowTodoFunction = (key: keyof FilterFunctions) => {
    setIsShowTodo(() => filterFunctions[key]);
  };

  return {
    filteredTodos,
    changeIsShowTodoFunction,
  };
};
