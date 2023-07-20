import { TodoPriority } from "@/shared/constants";

export interface AddTodoFormModel {
  title: string;
  priority: TodoPriority;
}
