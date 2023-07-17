import { GlobalStyles } from "@/app/global-styles";
import { StyledComponentsRegistry } from "@/lib";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../constants";
import { useAppSelector } from "../hooks/redux-hooks";

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const themeAlias = useAppSelector((store) => store.themeReducer.alias);
  const theme = themes[themeAlias];
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
