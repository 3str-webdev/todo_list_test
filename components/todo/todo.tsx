import { debounce } from "@/lib";
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
import { SearchIcon } from "@/ui/icons";

export const Todo = () => {
  const [search, setSearch] = useState<string>("");
  const { filteredTodos, changeIsShowTodoFunction } = useFilterTodos(search);

  const handleChangeFilter = (option: UIButtonsGroupOptionModel) => {
    changeIsShowTodoFunction(option.value as keyof FilterFunctions);
  };
  const handleChangeSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 200);

  return (
    <TodoLayout
      search={
        <UITextField
          placeholder="Search by todo title"
          leftAddon={<SearchIcon width={17} height={17} />}
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
