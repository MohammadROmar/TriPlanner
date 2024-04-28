import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedListItem from "../../UI/Motion/AnimatedListItem.jsx";
import HeaderItem from "../HeaderItem/HeaderItem.jsx";
import TABS from "../../../util/tabs.js";
import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <nav id="header-nav">
      <motion.ul
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
        animate="animate"
        className="nav-list"
      >
        {TABS.map(tab => (
          <HeaderItem key={tab.title} title={tab.title} />
        ))}
        {!isAuthenticated && (
          <AnimatedListItem>
            <button id="cta">
              <NavLink to="/register">Get Started</NavLink>
            </button>
          </AnimatedListItem>
        )}
      </motion.ul>
    </nav>
  );
}
