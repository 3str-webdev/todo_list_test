import { ReactNode } from "react";
import styled from "styled-components";

const TodoLayoutSt = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActionsSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface TodoLayoutProps {
  addTodoField: ReactNode;
  filters: ReactNode;
  itemsList: ReactNode;
}

export const TodoLayout = ({
  addTodoField,
  filters,
  itemsList,
}: TodoLayoutProps) => {
  return (
    <TodoLayoutSt>
      <ActionsSt>
        {addTodoField}
        {filters}
      </ActionsSt>
      <hr />
      {itemsList}
    </TodoLayoutSt>
  );
};
