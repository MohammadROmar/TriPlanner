import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const modalColors = {
  normal: {
    text: "var(--color-neuter)",
    background: "var(--color-neuter-background)"
  },
  alert: {
    text: "var(--color-danger)",
    background: "var(--color-danger-background)"
  }
};

const Modal = forwardRef(function Modal(
  { title, onConfirm, children, isAlert },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      }
    };
  });

  const colors = isAlert ? modalColors.alert : modalColors.normal;

  return createPortal(
    <dialog ref={dialog} className="modal">
      <h2 className="modal-title" style={{ color: colors.text }}>
        {title}
      </h2>
      {children}
      <form method="dialog" className="modal-form">
        <button>Cancel</button>
        <button
          className="action"
          onClick={onConfirm}
          style={{
            color: colors.text,
            background: colors.background
          }}
        >
          Confirm
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
