import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: localStorage.getItem("token"),
  expires: localStorage.getItem("expires"),
  refreshToken: localStorage.getItem("refreshToken"),
  isAuthenticated: localStorage.getItem("Authenticated") === "true",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, data) {
      const { token, expires, refreshToken } = data.payload;

      state.token = token;
      state.expires = expires;
      state.isAuthenticated = true;
      state.refreshToken = refreshToken;

      localStorage.setItem("token", token);
      localStorage.setItem("expires", expires);
      localStorage.setItem("Authenticated", "true");
      localStorage.setItem("refreshToken", refreshToken);
    },
    logout(state) {
      state.isAuthenticated = false;

      state.token = null;
      state.expires = null;
      state.refreshToken = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("Authenticated");
    },
    refreshTokens(state, data) {
      const { token, expires, refreshToken } = data.payload;

      state.token = token;
      state.expires = expires;
      state.isAuthenticated = true;
      state.refreshToken = refreshToken;

      localStorage.setItem("token", token);
      localStorage.setItem("expires", expires);
      localStorage.setItem("Authenticated", "true");
      localStorage.setItem("refreshToken", refreshToken);
    },
  },
});

export const authActions = authSlice.actions;
export const { login, logout, refreshTokens } = authSlice.actions;

export default authSlice.reducer;
