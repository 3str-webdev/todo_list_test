import { InputHTMLAttributes, ReactNode } from "react";
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
  leftAddon?: ReactNode | string;
}

export const UITextField = ({
  label,
  helpMessage,
  errorMessage,
  leftAddon,
  ...inputProps
}: UIInputProps) => {
  return (
    <UITextFieldSt>
      <UILabel label={label} isRequired={inputProps.required} />
      <InputBoxSt>
        <AddonSt>{leftAddon}</AddonSt>
        <UIInput {...inputProps} />
      </InputBoxSt>
      <UIMessage helpMessage={helpMessage} errorMessage={errorMessage} />
    </UITextFieldSt>
  );
};

const InputBoxSt = styled.label`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const AddonSt = styled.div`
  background-color: white;
  color: black;
  flex: 0 0 auto;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
