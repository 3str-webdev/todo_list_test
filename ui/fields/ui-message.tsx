import styled from "styled-components";

const UIMessageSt = styled.p<UIMessageProps>`
  font-size: 0.8rem;
  color: ${({ errorMessage, theme }) =>
    errorMessage ? theme.colors.danger[500] : "inherit"};
`;

interface UIMessageProps {
  helpMessage?: string;
  errorMessage?: string;
}

export const UIMessage = ({ helpMessage, errorMessage }: UIMessageProps) => {
  const getMessageContent = (): string | null => {
    if (errorMessage) return errorMessage;
    if (helpMessage) return helpMessage;
    return null;
  };

  const content = getMessageContent();

  if (!content) return null;

  return <UIMessageSt errorMessage={errorMessage}>{content}</UIMessageSt>;
};
