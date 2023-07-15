import { classes } from "@/lib";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonSt = styled.button`
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.background};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

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
`;

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
}

export const UIButton = ({
  children,
  variant = "primary",
  className,
  ...props
}: UIButtonProps) => {
  const variantClassName = {
    primary: "primary",
    danger: "danger",
  }[variant];
  return (
    <ButtonSt className={classes(className, variantClassName)} {...props}>
      {children}
    </ButtonSt>
  );
};
