import { useSelector } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";

import Router from "./router/Router.jsx";

import { queryClient } from "./util/http/http.js";

function App() {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <div id={theme === "DARK" ? "dark" : "light"} className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
