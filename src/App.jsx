import { useSelector } from "react-redux";

import Router from "./router/Router.jsx";

function App() {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <div id={theme === "DARK" ? "dark" : "light"} className="App">
      <Router />
    </div>
  );
}

export default App;
