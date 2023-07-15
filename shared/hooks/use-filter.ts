import { useEffect, useState } from "react";
import { TodoModel } from "../types";
import { useAppSelector } from "./redux-hooks";

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
  const todos = useAppSelector((store) => store.todosReducer.todos);
  const [filteredTodos, setFilteredTodos] = useState<TodoModel[]>(() => todos);
  const [isShowTodo, setIsShowTodo] = useState<(todo: TodoModel) => boolean>(
    () => showAllTodos
  );

  useEffect(() => {
    setFilteredTodos(todos.filter(isShowTodo));
  }, [todos, isShowTodo]);

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
