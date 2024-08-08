import { createSlice } from "@reduxjs/toolkit";

const initialNewUserState = { id: localStorage.getItem("serviceOwnerId") };

const newUserSlice = createSlice({
  name: "newUser",
  initialState: initialNewUserState,
  reducers: {
    set(state, data) {
      const id = data.payload;
      state.id = id;

      localStorage.setItem(
        "serviceOwnerId",
        JSON.stringify({
          id,
        })
      );
    },
    clear(state) {
      state.id = undefined;

      localStorage.removeItem("serviceOwnerId");
    },
  },
});

export const { setUser, clearId } = newUserSlice.actions;

export default newUserSlice.reducer;
