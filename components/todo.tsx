import { FilterFunctions, useFilterTodos } from "@/shared/hooks/use-filter-todos";
import { UISelectGroup } from "@/ui";
import { UISelectOptionModel } from "@/ui/types";
import { AddTodoForm } from "./add-todo-form";
import { TodoItemsList } from "./todo-items-list";
import { TodoLayout } from "./todo-layout";

export const Todo = () => {
  const { filteredTodos, changeIsShowTodoFunction } = useFilterTodos();

  const getFilterOptions = (): UISelectOptionModel[] => {
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
  const handleChangeFilter = (option: UISelectOptionModel) => {
    changeIsShowTodoFunction(option.value as keyof FilterFunctions);
  };

  return (
    <TodoLayout
      addTodoField={<AddTodoForm />}
      filters={
        <UISelectGroup
          options={getFilterOptions()}
          onChange={handleChangeFilter}
        />
      }
      itemsList={<TodoItemsList todos={filteredTodos} />}
    />
  );
};
