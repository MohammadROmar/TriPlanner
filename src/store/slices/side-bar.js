import { createSlice } from "@reduxjs/toolkit";

const initialSideBarState = { isHidden: true };

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: initialSideBarState,
  reducers: {
    showSideBar(state) {
      state.isHidden = false;
    },
    hideSideBar(state) {
      state.isHidden = true;
    },
  },
});

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;
