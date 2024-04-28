import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { activeTheme: "DARK" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setTheme(state, data) {
      state.activeTheme = data.payload.theme;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
