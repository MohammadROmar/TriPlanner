import { motion } from "framer-motion";

import "./ErrorBlock.css";

export default function ErrorBlock({ title, message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="error-block"
    >
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </motion.div>
  );
}
