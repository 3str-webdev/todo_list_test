import { ReactNode } from "react";
import styled from "styled-components";

const TodoItemSt = styled.div<{ isCompleted: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: ${({ isCompleted }) => (isCompleted ? 0.5 : 1)};
    word-break: break-all;

    & .subtitle {
      font-size: 0.8rem;
    }
  }

  & .actions {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

interface TodoItemProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  isCompleted: boolean;
}

export const TodoItem = ({
  title,
  subtitle,
  actions,
  isCompleted,
}: TodoItemProps) => {
  return (
    <TodoItemSt isCompleted={isCompleted}>
      <div className="content">
        <p className="title">{title}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      <div className="actions">{actions}</div>
    </TodoItemSt>
  );
};
