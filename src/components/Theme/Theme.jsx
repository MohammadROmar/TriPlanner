import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import DarkModeIcon from "../../assets/icons/DarkModeIcon.jsx";
import LightModeIcon from "../../assets/icons/LightModeIcon.jsx";

import { themeActions } from "../../store/slices/theme.js";
import "./Theme.css";

export default function Theme() {
  const dispatch = useDispatch();
  const activeTheme = useSelector(state => state.theme.activeTheme);

  const isDark = activeTheme === "DARK";

  function toggleTheme(theme) {
    if (theme !== activeTheme) {
      dispatch(themeActions.setTheme({ theme }));
    }
  }

  return (
    <div id="theme">
      <motion.button
        layoutId="theme-indicator"
        className={isDark ? "active" : ""}
        onClick={() => toggleTheme("DARK")}
      >
        <DarkModeIcon />
      </motion.button>
      <motion.button
        layoutId="theme-indicator"
        className={isDark ? "" : "active"}
        onClick={() => toggleTheme("LIGHT")}
      >
        <LightModeIcon />
      </motion.button>
    </div>
  );
}
