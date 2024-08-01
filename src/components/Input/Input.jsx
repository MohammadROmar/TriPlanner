import { motion, AnimatePresence } from "framer-motion";

import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter.js";

import "./Input.css";

export default function Input({
  name,
  id,
  type,
  value,
  error,
  onBlur,
  onChange
}) {
  if (id === undefined) {
    id = name;
  }

  if (type === undefined) {
    type = name;
  }

  return (
    <div className="input">
      <label htmlFor={id} className="input-label">
        {capitalizeFirstLetter(name)}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={"input-field" + (error ? " error" : "")}
      ></input>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="input-error"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
