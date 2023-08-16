"use client";

import { UIButtonsSelect } from "./fields/ui-buttons-select";
import { UIButtonsGroupOptionModel } from "./types";

interface UIButtonsGroupProps {
  label?: string;
  helpMessage?: string;
  errorMessage?: string;
  options: UIButtonsGroupOptionModel[];
  onChange: (option: UIButtonsGroupOptionModel) => void;
}

export const UIButtonsGroup = ({
  label,
  helpMessage,
  errorMessage,
  ...selectProps
}: UIButtonsGroupProps) => {
  return (
    <>
      <UIButtonsSelect {...selectProps} />
    </>
  );
};
