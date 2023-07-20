"use client";

import { getRandomNumber } from "@/lib";
import { TodoPriority } from "@/shared/constants";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { addTodo } from "@/store/slices/todos-slice";
import { UIButton, UIModal, UISelect, UITextField } from "@/ui";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { AddTodoFormModel } from "./types/form-model";

const AddTodoFormWrapperSt = styled.div<{ errorMessage?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface AddTodoFormTarget extends EventTarget {
  title: { value: string };
}

export const AddTodoForm = () => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddTodoFormModel>({
    defaultValues: {
      title: "",
      priority: TodoPriority.LOW,
    },
    mode: "onBlur",
  });

  const closeModal = () => {
    setErrorMessage(undefined);
    setIsShowForm(false);
  };

  const onSubmit = (data: AddTodoFormModel) => {
    dispatch(
      addTodo({
        ...data,
        id: getRandomNumber(10),
        isCompleted: false,
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

  const priorityOptions = [
    {
      label: "Low",
      value: TodoPriority.LOW,
    },
    {
      label: "Medium",
      value: TodoPriority.MEDIUM,
    },
    {
      label: "High",
      value: TodoPriority.HIGH,
    },
  ];

  return (
    <>
      <UIButton onClick={handleAddTodoClick}>Add Todo</UIButton>
      <UIModal isOpen={isShowForm} onClose={handleModalClose} size="sm">
        <UIModal.Header>Add todo form</UIModal.Header>
        <UIModal.Body>
          <form id="add-todo-form" onSubmit={handleSubmit(onSubmit)}>
            <AddTodoFormWrapperSt errorMessage={errorMessage}>
              <Controller
                name="title"
                control={control}
                render={({ field: { onChange } }) => (
                  <UITextField
                    name="title"
                    placeholder="Todo title"
                    label="Todo title"
                    onChange={onChange}
                    required
                    errorMessage={errorMessage}
                  />
                )}
              />
              <Controller
                name="priority"
                control={control}
                render={({ field: { onChange } }) => (
                  <UISelect
                    label="Priority"
                    options={priorityOptions}
                    onChange={onChange}
                    helpMessage="Select todo priority"
                  />
                )}
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
