import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonSt = styled.button<UIButtonProps>`
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.background};
  outline: none;
  border: none;
  cursor: pointer;
`;

type UIButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const UIButton = ({ children, ...props }: UIButtonProps) => {
  return <ButtonSt {...props}>{children}</ButtonSt>;
};
