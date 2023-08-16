"use client";

import { UISelectOptionModel } from "@/ui/types";
import { ButtonHTMLAttributes, MouseEvent } from "react";
import styled from "styled-components";

const OptionSt = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  text-align: start;
  border: none;
  outline: none;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary[500] : theme.colors.text};
  background-color: transparent;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary[500]}50;
  }
`;

interface UISelectOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: UISelectOptionModel;
  isSelected: boolean;
  onSelectOption: (option: UISelectOptionModel) => void;
}

export const UISelectOption = ({
  option,
  isSelected,
  children,
  onSelectOption,
  ...props
}: UISelectOptionProps) => {
  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSelectOption(option);
  };

  return (
    <OptionSt
      type="button"
      $isSelected={isSelected}
      onClick={handleSelect}
      {...props}
    >
      {children}
    </OptionSt>
  );
};
