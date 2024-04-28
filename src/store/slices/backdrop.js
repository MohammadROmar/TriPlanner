import { createSlice } from "@reduxjs/toolkit";

const initialBackdropState = { isOpen: false };

const backdropSlice = createSlice({
  name: "backdrop",
  initialState: initialBackdropState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

export const backdropActions = backdropSlice.actions;

export default backdropSlice.reducer;
