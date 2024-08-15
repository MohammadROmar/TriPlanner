import { motion } from "framer-motion";

import HeaderItem from "../HeaderItem/HeaderItem.jsx";
import LogoutItem from "../../LogoutItem/LogoutItem.jsx";
import TABS from "../../../data/tabs.js";

import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  return (
    <nav id="header-nav">
      <motion.ul
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
        animate="animate"
        className="nav-list"
      >
        {TABS.map((tab) => (
          <HeaderItem key={tab.title} to={tab.to} title={tab.title} />
        ))}
        <LogoutItem type="header" />
      </motion.ul>
    </nav>
  );
}
