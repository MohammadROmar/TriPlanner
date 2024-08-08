import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./SnackBar.css";

export default function SnackBar({ content }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: "5rem" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="snack-bar"
        >
          <p>{content}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
