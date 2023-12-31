import { DefaultTheme } from "styled-components";
import { TodoPriority } from "./todo-priority";

export interface IThemeMap {
  light: DefaultTheme;
  dark: DefaultTheme;
}

const baseTheme: DefaultTheme = {
  colors: {
    primary: {
      400: "#818cf8",
      500: "#6366f1",
    },
    danger: {
      400: "#fb7185",
      500: "#f43f5e",
    },
    todoPriority: {
      [TodoPriority.HIGH]: "#f87171",
      [TodoPriority.MEDIUM]: "#f59e0b",
      [TodoPriority.LOW]: "#10b981",
    },
    background: "#0f172a",
    text: "#f1f5f9",
  },
};

export const themes: IThemeMap = {
  light: {
    ...baseTheme,
    colors: { ...baseTheme.colors, background: "#f1f5f9", text: "#0f172a" },
  },
  dark: baseTheme,
};
