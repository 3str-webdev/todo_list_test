"use client";

import { getRandomNumber } from "@/lib";
import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { UISelectOptionModel } from "../types";

const convertOptionsToSelectOptions = (options: UISelectOptionModel[]) => {
  return options.map<SelectOptionModel>((option) => ({
    id: getRandomNumber(5),
    ...option,
  }));
};

const UISelectOptionsListSt = styled.ul`
  display: flex;
  list-style: none;
  /* gap: 2px; */

  & li:first-child button {
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
  }

  & li:last-child button {
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
  }

  & li button {
    border-right: 1px solid ${({ theme }) => theme.colors.background};
  }

  & li:last-child button {
    border-right: none;
  }
`;

interface UISelectProps {
  options: UISelectOptionModel[];
  onChange: (option: UISelectOptionModel) => void;
}

interface SelectOptionModel extends UISelectOptionModel {
  id: number;
}

export function UISelect({ options, onChange }: UISelectProps) {
  const [selectOptions, setSelectOptions] = useState<SelectOptionModel[]>(
    convertOptionsToSelectOptions(options)
  );
  const [selected, setSelected] = useState<SelectOptionModel>(selectOptions[0]);

  const handleSelect = (option: SelectOptionModel) => {
    setSelected(option);
    onChange(option);
  };

  if (!options.length) return null;

  return (
    <div>
      <UISelectOptionsListSt>
        {selectOptions.map((option, index) => {
          return (
            <UISelect.Option
              key={index}
              option={option}
              isSelected={selected.id === option.id}
              onClick={() => handleSelect(option)}
            />
          );
        })}
      </UISelectOptionsListSt>
    </div>
  );
}

const UISelectOptionSt = styled.button<{ $isSelected: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.7)};
  outline: none;
  border: none;
  cursor: pointer;
`;

interface UISelectOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: SelectOptionModel;
  isSelected: boolean;
}

UISelect.Option = function UISelectOption({
  option,
  isSelected,
  ...props
}: UISelectOptionProps) {
  return (
    <li>
      <UISelectOptionSt $isSelected={isSelected} {...props}>
        {option.label}
      </UISelectOptionSt>
    </li>
  );
};
