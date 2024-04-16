import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: "DARK" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      state.theme === "DARK" ? "LIGHT" : "DARK";
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
