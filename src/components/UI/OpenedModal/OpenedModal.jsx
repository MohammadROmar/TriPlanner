import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import "./OpenedModal.css";

export default function OpenedModal({ title, children }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog ref={dialog} className="modal">
      <div id="opened-modal-header">
        <h2 className="opened-modal-title">{title}</h2>
        <div className="divider"></div>
      </div>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
