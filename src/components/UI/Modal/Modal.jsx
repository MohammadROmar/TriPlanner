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

/*import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}*/
