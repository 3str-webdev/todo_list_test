import { DefaultTheme } from "styled-components";

export interface IThemeMap {
  light: DefaultTheme;
  dark: DefaultTheme;
}

export const themes: IThemeMap = {
  light: {
    colors: {
      primary: {
        400: "#60a5fa",
        500: "#3b82f6",
      },
      danger: {
        400: "#f87171",
        500: "#ef4444",
      },
      background: "#f1f5f9",
      text: "#0f172a",
    },
  },

  dark: {
    colors: {
      primary: {
        400: "#60a5fa",
        500: "#3b82f6",
      },
      danger: {
        400: "#f87171",
        500: "#ef4444",
      },
      background: "#0f172a",
      text: "#f1f5f9",
    },
  },
};
