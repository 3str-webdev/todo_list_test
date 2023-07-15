import { DefaultTheme } from "styled-components";

export interface IThemeMap {
  light: DefaultTheme;
  dark: DefaultTheme;
}

const baseTheme: DefaultTheme = {
  colors: {
    primary: {
      400: "#60a5fa",
      500: "#3b82f6",
    },
    danger: {
      400: "#fb7185",
      500: "#f43f5e",
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
