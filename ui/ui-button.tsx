"use client";

import { classes } from "@/lib";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const ButtonSt = styled.button<UIButtonProps & { $isIconOnly: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: ${({ $isIconOnly }) => ($isIconOnly ? "0.7rem" : "1rem")};
  padding-right: ${({ $isIconOnly }) => ($isIconOnly ? "0.7rem" : "1rem")};
  border-radius: 0.3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.background};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.primary {
    background: ${({ theme }) => theme.colors.primary[500]};
  }
  &.primary:hover {
    background: ${({ theme }) => theme.colors.primary[400]};
  }
  &.danger {
    background: ${({ theme }) => theme.colors.danger[500]};
  }
  &.danger:hover {
    background: ${({ theme }) => theme.colors.danger[400]};
  }
  &.clean {
    background: transparent;
  }
`;

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "clean";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const UIButton = ({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  className,
  ...props
}: UIButtonProps) => {
  const isIconOnly = !children;

  const buttonClassName = classes(
    className,
    {
      primary: "primary",
      danger: "danger",
      clean: "clean",
    }[variant]
  );
  return (
    <ButtonSt className={buttonClassName} $isIconOnly={isIconOnly} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonSt>
  );
};
