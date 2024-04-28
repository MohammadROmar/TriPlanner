import { motion } from "framer-motion";

import "./TabItem.css";

export default function TabItem({ tab }) {
  return (
    <li className="side-bar__item">
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 1.1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <tab.icon />
        <p>{tab.title}</p>
      </motion.button>
    </li>
  );
}
