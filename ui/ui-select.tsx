import styled from "styled-components";
import { UILabel } from "./fields/ui-label";
import { UIMessage } from "./fields/ui-message";
import { UISelectField } from "./fields/ui-select-field/ui-select-field";
import { UISelectOptionModel } from "./types";

const UISelectSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

interface UISelectProps {
  label?: string;
  helpMessage?: string;
  errorMessage?: string;
  required?: boolean;
  options: UISelectOptionModel[];
  onChange: (option: UISelectOptionModel) => void;
}

export const UISelect = ({
  label,
  helpMessage,
  errorMessage,
  required = false,
  onChange,
  options,
}: UISelectProps) => {
  return (
    <UISelectSt>
      <UILabel label={label} isRequired={required} />
      <UISelectField options={options} onChange={onChange} />
      <UIMessage helpMessage={helpMessage} errorMessage={errorMessage} />
    </UISelectSt>
  );
};
