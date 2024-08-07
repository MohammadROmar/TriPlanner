import { motion } from "framer-motion";

import "./Featue.css";

export default function Featue({ service }) {
  const { image, title, description } = service;

  const cssStyle = {
    background: `
      linear-gradient(
        to top, rgba(0, 0, 0, 1),
        transparent 60%
      ), url(${image}) center/cover no-repeat border-box`,
  };

  return (
    <motion.li
      key={title}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring" }}
      className="our-service"
      style={cssStyle}
    >
      <div className="our-service-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.li>
  );
}
