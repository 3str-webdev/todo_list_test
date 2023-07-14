import { ReactNode } from "react";
import styled from "styled-components";

const TodoLayoutSt = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface TodoLayoutProps {
  addTodoField: ReactNode;
  actions: ReactNode;
  itemsList: ReactNode;
}

export const TodoLayout = ({
  addTodoField,
  actions,
  itemsList,
}: TodoLayoutProps) => {
  return (
    <TodoLayoutSt>
      {addTodoField}
      {actions}
      <hr />
      {itemsList}
    </TodoLayoutSt>
  );
};
