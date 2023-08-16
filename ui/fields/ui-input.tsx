import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputSt = styled.input<UIInputProps>`
  width: 100%;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

type UIInputProps = InputHTMLAttributes<HTMLInputElement>;

export const UIInput = ({ ...props }: UIInputProps) => {
  return <InputSt {...props} />;
};
