import {
  FilterFunctions,
  useFilterTodos,
} from "@/shared/hooks/use-filter-todos";
import { UIButtonsGroup } from "@/ui";
import { UIButtonsGroupOptionModel } from "@/ui/types";
import { AddTodoForm } from "./add-todo-form/add-todo-form";
import { TodoItemsList } from "./todo-items-list";
import { TodoLayout } from "./todo-layout";

export const Todo = () => {
  const { filteredTodos, changeIsShowTodoFunction } = useFilterTodos();

  const getFilterOptions = (): UIButtonsGroupOptionModel[] => {
    return [
      {
        label: "all",
        value: "all",
      },
      {
        label: "completed",
        value: "completed",
      },
      {
        label: "uncompleted",
        value: "uncompleted",
      },
    ];
  };
  const handleChangeFilter = (option: UIButtonsGroupOptionModel) => {
    changeIsShowTodoFunction(option.value as keyof FilterFunctions);
  };

  return (
    <TodoLayout
      addTodoButton={<AddTodoForm />}
      filters={
        <UIButtonsGroup
          options={getFilterOptions()}
          onChange={handleChangeFilter}
        />
      }
      itemsList={<TodoItemsList todos={filteredTodos} />}
    />
  );
};
