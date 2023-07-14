import { InputHTMLAttributes } from "react";
import { UIInput } from "./fields/ui-input";

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
  return <UIInput {...inputProps} />;
};
