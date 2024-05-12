import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import DarkModeIcon from "../../assets/icons/DarkMode.jsx";
import LightModeIcon from "../../assets/icons/LightMode.jsx";

import { themeActions } from "../../store/slices/theme.js";
import "./Theme.css";

export default function Theme() {
  const dispatch = useDispatch();
  const activeTheme = useSelector(state => state.theme.activeTheme);
  const location = useLocation();

  const isDark = activeTheme === "DARK";

  function toggleTheme(theme) {
    if (theme !== activeTheme) {
      dispatch(themeActions.setTheme({ theme }));
    }
  }

  return (
    <motion.div
      key={`theme ${location.pathname.includes("welcome")}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="theme"
    >
      <button
        className={isDark ? "active" : ""}
        onClick={() => toggleTheme("DARK")}
      >
        <DarkModeIcon isActive={isDark} />
      </button>
      <button
        className={isDark ? "" : "active"}
        onClick={() => toggleTheme("LIGHT")}
      >
        <LightModeIcon isActive={!isDark} />
      </button>
    </motion.div>
  );
}
