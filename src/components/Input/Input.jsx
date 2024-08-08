import { motion, AnimatePresence } from "framer-motion";

import TempIcon from "../../assets/icons/Mobile.jsx";

import { formateInputLabel } from "../../util/formateInputLabel.js";

import "./Input.css";

export default function Input({
  id,
  type,
  name,
  value,
  error,
  onBlur,
  onChange,
  icon: Icon,
  ...props
}) {
  if (id === undefined) {
    id = name;
  }

  if (type === undefined) {
    type = name;
  }

  return (
    <motion.div layout className="input-container">
      <div className="input">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete="true"
          placeholder={formateInputLabel(name)}
          className={"input-field" + (error ? " error" : "")}
          {...props}
        />
        <Icon isError={error} />
      </div>

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
    </motion.div>
  );
}
