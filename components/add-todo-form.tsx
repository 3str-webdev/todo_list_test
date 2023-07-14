"use client";

import { getRandomNumber } from "@/lib";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { addTodo } from "@/store/slices/todos-slice";
import { UIButton, UITextField } from "@/ui";
import { customAlphabet } from "nanoid";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const AddTodoFormWrapperSt = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface AddTodoFormTarget extends EventTarget {
  title: { value: string };
}

export const AddTodoForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as AddTodoFormTarget;
    const title = target.title.value;

    if (!title) {
      setErrorMessage("Incorrect value");
      return;
    }

    dispatch(
      addTodo({
        id: getRandomNumber(10),
        title,
        isCompleted: false,
      })
    );
    setErrorMessage(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddTodoFormWrapperSt>
        <UITextField
          name="title"
          placeholder="Todo title"
          label="Add todo"
          errorMessage={errorMessage}
        />
        <UIButton type="submit">Add</UIButton>
      </AddTodoFormWrapperSt>
    </form>
  );
};
