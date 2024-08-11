import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import SuccessIcon from "../../../assets/icons/Success.jsx";

import { hideSnackbar } from "../../../store/slices/snackbar.js";

import "./Snackbar.css";

export default function Snackbar() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.snackbar.message);
  const snackbarIsVisible = useSelector((state) => state.snackbar.isVisible);

  useEffect(() => {
    setTimeout(() => dispatch(hideSnackbar()), 5000);
  }, [snackbarIsVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: "5rem" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="snack-bar"
    >
      <SuccessIcon />
      <p>{message}</p>
    </motion.div>
  );
}
