import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

import Router from "./router/Router.jsx";
import Snackbar from "./components/UI/Snackbar/Snackbar.jsx";

import { queryClient } from "./util/http/http.js";

function App() {
  const theme = useSelector((state) => state.theme.activeTheme);
  const snackbarIsVisible = useSelector((state) => state.snackbar.isVisible);

  return (
    <>
      <div id={theme === "DARK" ? "dark" : "light"} className="app">
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </div>
      <AnimatePresence>{snackbarIsVisible && <Snackbar />}</AnimatePresence>
    </>
  );
}

export default App;
