import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

import Router from "./router/Router.jsx";
import Snackbar from "./components/UI/Snackbar/Snackbar.jsx";

import { queryClient } from "./util/http/http.js";

function App() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzZhZTA3YS00YjBkLTRiOTYtYjNiMC02MTA1ZTY1MTIyNWIiLCJqdGkiOiJhNzYwMmRhZi1jMDYyLTRkYjMtYmI1NS05MDEyZDdhNjI5NDgiLCJlbWFpbCI6IkFkbWluMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoyMjYzNjU1MzExLCJpc3MiOiJSZXN0YXVyYW50QXBpIiwiYXVkIjoiUmVzdGF1cmFudEFwaUNsaWVudCJ9.YNFPOO7jQL5QD9CEwL4N7MEiVxEkz3Af1oITOWmuAVA"
  );

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
