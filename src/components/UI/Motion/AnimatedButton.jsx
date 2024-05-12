import { motion } from "framer-motion";

export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      whileTap={{ scale: 1.1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
