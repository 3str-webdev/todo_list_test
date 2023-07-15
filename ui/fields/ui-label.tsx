import styled from "styled-components";

const UILabelSt = styled.label<Pick<UILabelProps, "isRequired">>`
  font-size: 0.8rem;

  &:after {
    content: "*";
    color: ${({ theme }) => theme.colors.danger[500]};
    margin-left: 0.3rem;
    visibility: ${({ isRequired }) => (isRequired ? "visible" : "hidden")};
  }
`;

interface UILabelProps {
  label: string | undefined;
  isRequired?: boolean;
}

export const UILabel = ({ label, isRequired }: UILabelProps) => {
  if (!label) return null;
  return <UILabelSt isRequired={isRequired}>{label}</UILabelSt>;
};
