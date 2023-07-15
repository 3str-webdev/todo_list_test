import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonSt = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem;
  cursor: pointer;
`;

interface UIIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UIIconButton = ({ children, ...props }: UIIconButtonProps) => {
  return <ButtonSt {...props}>{children}</ButtonSt>;
};
