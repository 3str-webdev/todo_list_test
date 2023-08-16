"use client";

import { CustomThemeProvider } from "@/shared/providers/custom-theme-provider";
import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        {children}
        <div id="modal"></div>
      </CustomThemeProvider>
    </Provider>
  );
};
