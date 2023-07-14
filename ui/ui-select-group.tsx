import { UISelect } from "./fields/ui-select";
import { UISelectOptionModel } from "./types";

interface UISelectGroupProps {
  label?: string;
  helpMessage?: string;
  errorMessage?: string;
  options: UISelectOptionModel[];
  onChange: (option: UISelectOptionModel) => void;
}

export const UISelectGroup = ({
  label,
  helpMessage,
  errorMessage,
  ...selectProps
}: UISelectGroupProps) => {
  return (
    <>
      <UISelect {...selectProps} />
    </>
  );
};
