import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "owner",
  initialState: { isVisible: false, message: "" },
  reducers: {
    showSnackbar(state, data) {
      state.isVisible = true;
      state.message = data.payload.message;
    },
    hideSnackbar(state) {
      state.isVisible = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
