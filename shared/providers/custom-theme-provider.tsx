"use client";

import { GlobalStyles } from "@/app/global-styles";
import { StyledComponentsRegistry } from "@/lib";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../constants";
import { useAppSelector } from "../hooks/redux-hooks";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        <div className={montserrat.className}>{children}</div>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
