import { motion } from "framer-motion";

import "./Service.css";

export default function Service({ service }) {
  const { image, title, description } = service;

  const cssStyle = {
    background: `
      linear-gradient(
        to top, rgba(0, 0, 0, 01),
        transparent 60%
      ) , url(${image}) center/cover no-repeat border-box`
  };

  return (
    <motion.li
      key={title}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring" }}
      className="service"
      style={cssStyle}
    >
      <div className="service-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.li>
  );
}
