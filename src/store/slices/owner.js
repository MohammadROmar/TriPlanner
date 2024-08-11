import { createSlice } from "@reduxjs/toolkit";

const initialOwnerState = {
  id: localStorage.getItem("ownerId"),
  role: localStorage.getItem("ownerRole"),
};

const ownerSlice = createSlice({
  name: "owner",
  initialState: initialOwnerState,
  reducers: {
    set(state, data) {
      const id = data.payload.id;
      const role = data.payload.role;

      state.id = id;
      state.role = role;

      localStorage.setItem("ownerId", id);
      localStorage.setItem("ownerRole", role);
    },
    clear(state) {
      state.id = undefined;
      state.role = undefined;

      localStorage.removeItem("ownerId");
      localStorage.removeItem("ownerRole");
    },
  },
});

export const { set, clear } = ownerSlice.actions;

export default ownerSlice.reducer;
