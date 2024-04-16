import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = forwardRef(function Modal({ title, children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <form method="dialog">
        <button>Ok</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
