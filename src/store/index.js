import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.js";
import themeReducer from "./slices/theme.js";
import backdropReducer from "./slices/backdrop.js";
import sideBarReducer from "./slices/side-bar.js";
import ServiceReducer from "./slices/service.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    backdrop: backdropReducer,
    sideBar: sideBarReducer,
    service: ServiceReducer,
  },
});

export default store;
