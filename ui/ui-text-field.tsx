import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { UIInput } from "./fields/ui-input";
import { UILabel } from "./fields/ui-label";
import { UIMessage } from "./fields/ui-message";

const UITextFieldSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpMessage?: string;
  errorMessage?: string;
}

export const UITextField = ({
  label,
  helpMessage,
  errorMessage,
  ...inputProps
}: UIInputProps) => {
  return (
    <UITextFieldSt>
      <UILabel label={label} isRequired={inputProps.required} />
      <UIInput {...inputProps} />
      <UIMessage helpMessage={helpMessage} errorMessage={errorMessage} />
    </UITextFieldSt>
  );
};
