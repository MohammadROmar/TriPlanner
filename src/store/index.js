import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.js";
import themeReducer from "./slices/theme.js";
import ServiceReducer from "./slices/service.js";
import newUserReducer from "./slices/newUser.js";
import sideBarReducer from "./slices/side-bar.js";
import backdropReducer from "./slices/backdrop.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    sideBar: sideBarReducer,
    service: ServiceReducer,
    newUser: newUserReducer,
    backdrop: backdropReducer,
  }
});

export default store;
