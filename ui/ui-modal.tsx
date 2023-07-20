import { HTMLAttributes, MouseEvent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const BackdropSt = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.text} / 0;
  backdrop-filter: blur(4px) brightness(0.72);
`;

const UIModalSt = styled.article<{ size: ModalSize }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  width: 100%;
  max-width: ${({ size }) =>
    ({
      sm: "520px",
      md: "660px",
      lg: "800px",
      full: "100%",
    }[size])};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 240px;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
`;

type ModalSize = "sm" | "md" | "lg" | "full";

interface UIModalProps extends HTMLAttributes<HTMLElement> {
  size?: ModalSize;
  isOpen: boolean;
  onClose: () => void;
}

export const UIModal = ({
  size = "md",
  isOpen,
  onClose,
  children,
  ...props
}: UIModalProps) => {
  const handleCloseClick = (e: MouseEvent<HTMLElement>) => {
    const isModal = (e.target as HTMLElement).closest("[data-id=modal]");
    if (isModal) {
      return;
    }
    onClose();
  };

  if (!isOpen) return null;

  const modal = (
    <BackdropSt onClick={handleCloseClick}>
      <UIModalSt size={size} data-id="modal" {...props}>
        {children}
      </UIModalSt>
    </BackdropSt>
  );

  return createPortal(modal, document.querySelector("#modal") as HTMLElement);
};

const UIModalHeaderSt = styled.h3`
  padding: 1.2rem;
  padding-bottom: 0;
  font-size: 1.2rem;
`;

type UIModalHeaderProps = HTMLAttributes<HTMLHeadingElement>;

UIModal.Header = function UIModalHeader({
  children,
  ...props
}: UIModalHeaderProps) {
  return <UIModalHeaderSt {...props}>{children}</UIModalHeaderSt>;
};

const UIModalBodySt = styled.div`
  margin-top: 1rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
`;

type UIModalBodyProps = HTMLAttributes<HTMLElement>;

UIModal.Body = function UIModalBody({ children, ...props }: UIModalBodyProps) {
  return <UIModalBodySt {...props}>{children}</UIModalBodySt>;
};

const UIModalFooterSt = styled.div`
  margin-top: auto;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type UIModalFooterProps = HTMLAttributes<HTMLElement>;

UIModal.Footer = function UIModalFooter({
  children,
  ...props
}: UIModalFooterProps) {
  return <UIModalFooterSt {...props}>{children}</UIModalFooterSt>;
};
