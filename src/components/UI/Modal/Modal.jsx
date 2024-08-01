import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { modalColors } from "../../../data/colors.js";

import "./Modal.css";

const Modal = forwardRef(function Modal(
  { title, onConfirm, onClose, children, isAlert, hasActions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const colors = isAlert ? modalColors.alert : modalColors.normal;

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      <h2 className="modal-title" style={{ color: colors.text }}>
        {title}
      </h2>
      {children}
      {!hasActions && (
        <form method="dialog" className="modal-form">
          <button>Cancel</button>
          <button
            className="action"
            onClick={onConfirm}
            style={{
              color: colors.text,
              background: colors.background,
            }}
          >
            Confirm
          </button>
        </form>
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
