import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux-hooks";
import { FilterFunctions, useFilterTodos } from "@/shared/hooks/use-filter";
import { TodoModel } from "@/shared/types";
import { toggleTheme } from "@/store/slices/theme-slice";
import { deleteTodo, toggleCompletedTodo } from "@/store/slices/todos-slice";
import { UIButton, UISelectGroup } from "@/ui";
import { UISelectOptionModel } from "@/ui/types";
import { useState } from "react";
import styled from "styled-components";
import { AddTodoForm } from "./add-todo-form";
import { TodoItem } from "./todo-item";
import { TodoLayout } from "./todo-layout";

const TodoListSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
`;

export const Todo = () => {
  const dispatch = useAppDispatch();
  const themeAlias = useAppSelector((store) => store.themeReducer.alias);
  const todos = useAppSelector((store) => store.todosReducer.todos);
  const { isShowTodo, changeIsShowTodoFunction } = useFilterTodos();

  const getThemeButtonContent = () => {
    return themeAlias === "dark" ? "Light" : "Dark";
  };
  const getItemSubtitle = (isCompleted: boolean) => {
    return isCompleted ? "completed" : undefined;
  };
  const getItemToggleCompleteButtonText = (isCompleted: boolean) => {
    return isCompleted ? "Uncompleted" : "Completed";
  };

  const handleToggleThemeClick = () => {
    dispatch(toggleTheme());
  };
  const handleToggleCompletedClick = (id: TodoModel["id"]) => {
    dispatch(toggleCompletedTodo(id));
  };
  const handleDeleteTodoClick = (id: TodoModel["id"]) => {
    dispatch(deleteTodo(id));
  };

  const getFilterOptions = (): UISelectOptionModel[] => {
    return [
      {
        label: "all",
        value: "all",
      },
      {
        label: "completed",
        value: "completed",
      },
      {
        label: "uncompleted",
        value: "uncompleted",
      },
    ];
  };
  const handleChangeFilter = (option: UISelectOptionModel) => {
    changeIsShowTodoFunction(option.value as keyof FilterFunctions);
  };

  return (
    <TodoLayout
      addTodoField={<AddTodoForm />}
      actions={
        <>
          <UISelectGroup
            options={getFilterOptions()}
            onChange={handleChangeFilter}
          />
          <UIButton onClick={handleToggleThemeClick}>
            {getThemeButtonContent()}
          </UIButton>
        </>
      }
      itemsList={
        <TodoListSt>
          {todos.map((todo) => {
            if (!isShowTodo(todo)) return null;

            return (
              <li key={todo.id}>
                <TodoItem
                  title={todo.title}
                  subtitle={getItemSubtitle(todo.isCompleted)}
                  isCompleted={todo.isCompleted}
                  actions={
                    <>
                      <UIButton
                        onClick={() => handleToggleCompletedClick(todo.id)}
                      >
                        {getItemToggleCompleteButtonText(todo.isCompleted)}
                      </UIButton>
                      <UIButton onClick={() => handleDeleteTodoClick(todo.id)}>
                        Delete
                      </UIButton>
                    </>
                  }
                />
              </li>
            );
          })}
        </TodoListSt>
      }
    />
  );
};
