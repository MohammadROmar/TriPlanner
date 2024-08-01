import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Modal from "../../../components/UI/Modal/Modal.jsx";
import ErrorBlock from "../../../components/UI/ErrorBlock/ErrorBlock.jsx";

import { deleteFn } from "../../../util/http/methods/delete.js";

import "./Actions.css";

export default function Actions({ serId, subserId, serviceTypeName }) {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () =>
      deleteFn(
        `services/${serId}/rooms/${subserId}`,
        "An error occured while deleting this subservice."
      ),
    onSuccess: () => navigate("../"),
  });

  const dialog = useRef();

  function confirmDeletion() {
    mutate();
  }

  function handleDelete() {
    dialog.current.open();
  }

  function handleEdit() {}

  let content;

  if (isPending) {
    content = <p className="submit">Submitting...</p>;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={"Couldn't delete this subservice"}
        message="Please try again later."
      />
    );
  }

  return (
    <>
      <Modal ref={dialog} isAlert title="Confirm Deleting" hasActions>
        <p>Are you sure you want to delete this subservice?</p>
        <p>This action cannot be undone.</p>

        {isPending && content}
        {!isPending && (
          <form method="dialog" className="modal-form delete-subservice">
            <button>Cancel</button>
            <button type="button" className="action" onClick={confirmDeletion}>
              Confirm
            </button>
          </form>
        )}

        {isError && content}
      </Modal>

      <div className="details-actions">
        <button className="details__delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="details__edit" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </>
  );
}
