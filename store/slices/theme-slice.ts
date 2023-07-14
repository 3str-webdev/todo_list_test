import { IThemeMap } from "@/shared/constants/theme";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { alias: keyof IThemeMap } = {
  alias: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.alias === "dark") {
        state.alias = "light";
      } else {
        state.alias = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
