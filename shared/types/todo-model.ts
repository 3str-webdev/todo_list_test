import { TodoPriority } from "../constants";

export interface TodoModel {
  id: number;
  title: string;
  isCompleted: boolean;
  priority: TodoPriority;
}
