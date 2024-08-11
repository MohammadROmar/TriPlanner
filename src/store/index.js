import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.js";
import ownerReducer from "./slices/owner.js";
import themeReducer from "./slices/theme.js";
import newUserReducer from "./slices/owner.js";
import ServiceReducer from "./slices/service.js";
import sideBarReducer from "./slices/side-bar.js";
import backdropReducer from "./slices/backdrop.js";
import snackbarReducer from "./slices/snackbar.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    owner: ownerReducer,
    theme: themeReducer,
    sideBar: sideBarReducer,
    service: ServiceReducer,
    newUser: newUserReducer,
    backdrop: backdropReducer,
    snackbar: snackbarReducer,
  },
});

export default store;
