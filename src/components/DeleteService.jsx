import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "./UI/Modal/Modal";

import { deleteFn } from "../util/http/methods/delete.js";
import { useSelector } from "react-redux";

export default function DeleteService() {
  const dialog = useRef();
  const navigate = useNavigate();

  const governorateId = useSelector((state) => state.service.governorateId);
  const serviceId = useSelector((state) => state.service.service.id);

  const { mutate } = useMutation({
    mutationFn: deleteFn,
    onSuccess: () =>
      navigate("../", {
        relative: "path",
      }),
  });

  function handleDeletion() {
    mutate(`governorates/${governorateId}/services/${serviceId}`);
  }

  return (
    <>
      <Modal ref={dialog} title="Confirm Deletion" isAlert>
        <p>Are you sure you want to delete this service?</p>
        <p>This action cannot be undone.</p>
      </Modal>
      <button className="delete-service" onClick={() => dialog.current.open()}>
        Delete
      </button>
    </>
  );
}
