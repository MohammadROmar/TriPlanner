import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth.js";
import themeReducer from "./theme.js";
import backdropReducer from "./backdrop.js";
import sideBarReducer from "./side-bar.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    backdrop: backdropReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
