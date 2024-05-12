import { motion } from "framer-motion";

export default function AnimatedListItem({ children, ...props }) {
  return (
    <motion.li
      variants={{
        animate: { scale: 1, opacity: 1 }
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.li>
  );
}
