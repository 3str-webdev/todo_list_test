"use client";

import { getRandomNumber } from "@/lib";
import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { UIButtonsGroupOptionModel } from "../types";

const convertOptionsToButtonsSelectOptions = (
  options: UIButtonsGroupOptionModel[]
) => {
  return options.map<ButtonsSelectOptionModel>((option) => ({
    id: getRandomNumber(5),
    ...option,
  }));
};

const UIButtonsSelectOptionsListSt = styled.ul`
  display: flex;
  list-style: none;

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

interface UIButtonsSelectProps {
  options: UIButtonsGroupOptionModel[];
  onChange: (option: UIButtonsGroupOptionModel) => void;
}

interface ButtonsSelectOptionModel extends UIButtonsGroupOptionModel {
  id: number;
}

export function UIButtonsSelect({ options, onChange }: UIButtonsSelectProps) {
  const [selectOptions, setButtonsSelectOptions] = useState<ButtonsSelectOptionModel[]>(
    convertOptionsToButtonsSelectOptions(options)
  );
  const [selected, setButtonsSelected] = useState<ButtonsSelectOptionModel>(selectOptions[0]);

  const handleButtonsSelect = (option: ButtonsSelectOptionModel) => {
    setButtonsSelected(option);
    onChange(option);
  };

  if (!options.length) return null;

  return (
    <div>
      <UIButtonsSelectOptionsListSt>
        {selectOptions.map((option, index) => {
          return (
            <UIButtonsSelect.Option
              key={index}
              option={option}
              isButtonsSelected={selected.id === option.id}
              onClick={() => handleButtonsSelect(option)}
            />
          );
        })}
      </UIButtonsSelectOptionsListSt>
    </div>
  );
}

const UIButtonsSelectOptionSt = styled.button<{ $isButtonsSelected: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  opacity: ${({ $isButtonsSelected }) => ($isButtonsSelected ? 1 : 0.7)};
  outline: none;
  border: none;
  cursor: pointer;
`;

interface UIButtonsSelectOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: ButtonsSelectOptionModel;
  isButtonsSelected: boolean;
}

UIButtonsSelect.Option = function UIButtonsSelectOption({
  option,
  isButtonsSelected,
  ...props
}: UIButtonsSelectOptionProps) {
  return (
    <li>
      <UIButtonsSelectOptionSt $isButtonsSelected={isButtonsSelected} {...props}>
        {option.label}
      </UIButtonsSelectOptionSt>
    </li>
  );
};
