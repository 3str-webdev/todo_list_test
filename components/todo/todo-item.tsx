"use client";

import { TodoPriority } from "@/shared/constants";
import { ReactNode } from "react";
import styled from "styled-components";

const TodoItemSt = styled.div<{
  $isCompleted: boolean;
  priority: TodoPriority;
}>`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  & .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
    word-break: break-all;

    & .subtitle {
      font-size: 0.8rem;
    }

    &::before {
      content: "";
      position: absolute;
      left: -0.5rem;
      height: 100%;
      width: 0.12rem;
      background-color: ${({ theme, priority }) =>
        theme.colors.todoPriority[priority] ?? "transparent"};
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
  priority: TodoPriority;
}

export const TodoItem = ({
  title,
  subtitle,
  actions,
  isCompleted,
  priority,
}: TodoItemProps) => {
  return (
    <TodoItemSt $isCompleted={isCompleted} priority={priority}>
      <div className="content">
        <p className="title">{title}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      <div className="actions">{actions}</div>
    </TodoItemSt>
  );
};
