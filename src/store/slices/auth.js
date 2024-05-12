import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("Authenticated") === "true"
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("Authenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.setItem("Authenticated", "false");
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
