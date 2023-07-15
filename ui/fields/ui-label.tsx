import styled from "styled-components";

const UILabelSt = styled.label<Pick<UILabelProps, "isRequired">>`
  font-size: 0.8rem;

  &:after {
    content: "*";
    color: red;
    margin-left: 0.3rem;
    visibility: ${({ isRequired }) => (isRequired ? "visible" : "hidden")};
  }
`;

interface UILabelProps {
  label: string | undefined;
  isRequired?: boolean;
}

export const UILabel = ({ label, isRequired }: UILabelProps) => {
  return <UILabelSt isRequired={isRequired}>{label}</UILabelSt>;
};
