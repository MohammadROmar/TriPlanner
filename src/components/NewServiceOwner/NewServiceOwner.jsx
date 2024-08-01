import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import NewOwnerForm from "../NewOwnerForm/NewOwnerForm.jsx";

import "./NewServiceOwner.css";

export default function NewServiceOwner() {
  const dialog = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog ref={dialog} className="modal">
      <NewOwnerForm />
    </dialog>,
    document.getElementById("modal")
  );
}
