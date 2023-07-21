import {
  FilterFunctions,
  useFilterTodos,
} from "@/shared/hooks/use-filter-todos";
import { UIButtonsGroup, UITextField } from "@/ui";
import { UIButtonsGroupOptionModel } from "@/ui/types";
import { ChangeEvent, useState } from "react";
import { AddTodoForm } from "../add-todo-form/add-todo-form";
import { filterOptions } from "./constants/filter-options";
import { TodoItemsList } from "./todo-items-list";
import { TodoLayout } from "./todo-layout";

export const Todo = () => {
  const [search, setSearch] = useState<string>("");
  const { filteredTodos, changeIsShowTodoFunction } = useFilterTodos(search);

  const handleChangeFilter = (option: UIButtonsGroupOptionModel) => {
    changeIsShowTodoFunction(option.value as keyof FilterFunctions);
  };
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <TodoLayout
      search={
        <UITextField
          placeholder="Search by todo title"
          onChange={handleChangeSearch}
        />
      }
      addTodoButton={<AddTodoForm />}
      filters={
        <UIButtonsGroup options={filterOptions} onChange={handleChangeFilter} />
      }
      itemsList={<TodoItemsList todos={filteredTodos} />}
    />
  );
};
