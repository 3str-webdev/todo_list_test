"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { UISelectOptionModel } from "../../types";
import { UISelectOption } from "./ui-select-option";

const SelectSt = styled.div`
  position: relative;
  width: 100%;
`;

interface UISelectFieldProps {
  options: UISelectOptionModel[];
  onChange: (value: UISelectOptionModel["value"]) => void;
}

export const UISelectField = ({
  options,
  onChange,
  ...props
}: UISelectFieldProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<UISelectOptionModel>(
    options[0]
  );
  const handleOptionClick = (option: UISelectOptionModel) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };
  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const clickHandler = (event: globalThis.MouseEvent) => {
      const target = event.target;

      if (
        isOpen &&
        target instanceof HTMLElement &&
        !target.contains(triggerRef.current)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, [isOpen]);

  if (!options.length) return null;

  return (
    <SelectSt {...props}>
      <UISelectTrigger
        type="button"
        onClick={handleTriggerClick}
        ref={triggerRef}
      >
        {selectedOption.label}
      </UISelectTrigger>
      <UISelectOptionsList $isOpen={isOpen}>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <UISelectOption
                option={option}
                isSelected={selectedOption === option}
                onSelectOption={handleOptionClick}
              >
                {option.label}
              </UISelectOption>
            </li>
          );
        })}
      </UISelectOptionsList>
    </SelectSt>
  );
};

const UISelectTrigger = styled.button`
  width: 100%;
  padding: 0.6rem 1rem;
  outline: none;
  border: none;
  border-radius: 0.4rem;
  background-color: white;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
  }

  text-align: start;
  font-size: 0.9rem;
  cursor: pointer;
`;

const UISelectOptionsList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  margin-top: 5px;
  width: 100%;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;

  list-style: none;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 0.5rem;
`;
