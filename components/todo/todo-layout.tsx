"use client";

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
  search: ReactNode;
  addTodoButton: ReactNode;
  filters: ReactNode;
  itemsList: ReactNode;
}

export const TodoLayout = ({
  search,
  addTodoButton,
  filters,
  itemsList,
}: TodoLayoutProps) => {
  return (
    <TodoLayoutSt>
      {search}
      <ActionsSt>
        {addTodoButton}
        {filters}
      </ActionsSt>
      <hr />
      {itemsList}
    </TodoLayoutSt>
  );
};
