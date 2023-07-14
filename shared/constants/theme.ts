import { DefaultTheme } from "styled-components";

export interface IThemeMap {
  light: DefaultTheme;
  dark: DefaultTheme;
}

export const themes: IThemeMap = {
  light: {
    colors: {
      primary: "#3b82f6",
      secondary: "#0d9488",
      background: "#f1f5f9",
      text: "#0f172a",
    },
  },

  dark: {
    colors: {
      primary: "#3b82f6",
      secondary: "#0d9488",
      background: "#0f172a",
      text: "#f1f5f9",
    },
  },
};
