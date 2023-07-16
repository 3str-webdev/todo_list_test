import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { TodoModel } from "@/shared/types";
import { deleteTodo, toggleCompletedTodo } from "@/store/slices/todos-slice";
import { UIButton } from "@/ui";
import styled from "styled-components";
import { TodoItem } from "./todo-item";

const TodoListSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
`;

interface TodoItemsListProps {
  todos: TodoModel[];
}

export const TodoItemsList = ({ todos }: TodoItemsListProps) => {
  const dispatch = useAppDispatch();

  const getItemSubtitle = (isCompleted: boolean) => {
    return isCompleted ? "completed" : undefined;
  };
  const getItemToggleCompleteButtonText = (isCompleted: boolean) => {
    return isCompleted ? "Uncompleted" : "Completed";
  };

  const handleToggleCompletedClick = (id: TodoModel["id"]) => {
    dispatch(toggleCompletedTodo(id));
  };
  const handleDeleteTodoClick = (id: TodoModel["id"]) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoListSt>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem
              title={todo.title}
              subtitle={getItemSubtitle(todo.isCompleted)}
              isCompleted={todo.isCompleted}
              actions={
                <>
                  <UIButton onClick={() => handleToggleCompletedClick(todo.id)}>
                    {getItemToggleCompleteButtonText(todo.isCompleted)}
                  </UIButton>
                  <UIButton
                    variant="danger"
                    onClick={() => handleDeleteTodoClick(todo.id)}
                  >
                    Delete
                  </UIButton>
                </>
              }
            />
          </li>
        );
      })}
    </TodoListSt>
  );
};
