import { createSlice } from "@reduxjs/toolkit";

const theme = localStorage.getItem("trip_planner_theme");

const initialThemeState = {
  activeTheme:
    theme !== undefined
      ? theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "DARK"
      : "LIGHT"
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setTheme(state, data) {
      const theme = data.payload.theme;
      localStorage.setItem("trip_planner_theme", theme);
      state.activeTheme = theme;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
