import { TodoPriority } from "@/shared/constants";
import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { TodoModel } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { todos: TodoModel[] } = {
  todos: [
    {
      id: 1,
      title: "SomeTodo",
      isCompleted: true,
      priority: TodoPriority.HIGH,
    },
    {
      id: 2,
      title: "Hello",
      isCompleted: false,
      priority: TodoPriority.LOW,
    },
    {
      id: 3,
      title: "Todo number 3",
      isCompleted: false,
      priority: TodoPriority.MEDIUM,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoModel>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<TodoModel["id"]>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleCompletedTodo: (state, action: PayloadAction<TodoModel["id"]>) => {
      const id = action.payload;
      state.todos = state.todos.map<TodoModel>((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleCompletedTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
