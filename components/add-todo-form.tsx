"use client";

import { getRandomNumber } from "@/lib";
import { TodoPriority } from "@/shared/constants";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { addTodo } from "@/store/slices/todos-slice";
import { UIButton, UIModal, UITextField } from "@/ui";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const AddTodoFormWrapperSt = styled.div<{ errorMessage?: string }>`
  display: flex;
  align-items: ${({ errorMessage }) => (errorMessage ? "center" : "flex-end")};
  gap: 0.5rem;
`;

interface AddTodoFormTarget extends EventTarget {
  title: { value: string };
}

export const AddTodoForm = () => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setErrorMessage(undefined);
    setIsShowForm(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as AddTodoFormTarget;
    const title = target.title.value;

    if (!title.trim()) {
      setErrorMessage("Todo title can't be empty");
      return;
    }

    dispatch(
      addTodo({
        id: getRandomNumber(10),
        title,
        isCompleted: false,
        priority: TodoPriority.LOW,
      })
    );

    closeModal();
  };

  const handleAddTodoClick = () => {
    setIsShowForm(true);
  };

  const handleModalClose = () => {
    closeModal();
  };

  return (
    <>
      <UIButton onClick={handleAddTodoClick}>Add Todo</UIButton>
      <UIModal isOpen={isShowForm} onClose={handleModalClose} size="sm">
        <UIModal.Header>Add todo form</UIModal.Header>
        <UIModal.Body>
          <form id="add-todo-form" onSubmit={handleSubmit}>
            <AddTodoFormWrapperSt errorMessage={errorMessage}>
              <UITextField
                name="title"
                placeholder="Todo title"
                label="Todo title"
                required
                errorMessage={errorMessage}
              />
            </AddTodoFormWrapperSt>
          </form>
        </UIModal.Body>
        <UIModal.Footer>
          <UIButton type="submit" form="add-todo-form">
            Add
          </UIButton>
        </UIModal.Footer>
      </UIModal>
    </>
  );
};
