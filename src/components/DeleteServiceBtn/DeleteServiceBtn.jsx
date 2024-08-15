import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Modal/Modal.jsx";
import ErrorBlock from "../UI/ErrorBlock/ErrorBlock.jsx";

import { deleteFn } from "../../util/http/methods/delete.js";
import { showSnackbar } from "../../store/slices/snackbar.js";

import "./DeleteServiceBtn.css";

export default function DeleteServiceBtn() {
  const dialog = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const serviceId = useSelector((state) => state.service.service.id);
  const governorateId = useSelector((state) => state.service.governorateId);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () =>
      deleteFn(`governorates/${governorateId}/services/${serviceId}`),
    onSuccess: () => {
      dialog.current.close();

      navigate("../", {
        relative: "path",
      });

      dispatch(showSnackbar({ message: "Service Deleted Successfully" }));
    },
  });

  return (
    <>
      <Modal ref={dialog} title="Confirm Deletion" isAlert hasActions>
        <p>Are you sure you want to delete this service?</p>
        <p>This action cannot be undone</p>
        <div className="modal-form delete-subservice">
          {isPending && <p>Deleting...</p>}
          {!isPending && (
            <>
              <button
                onClick={() => {
                  dialog.current.close();
                }}
              >
                Cancel
              </button>
              <button className="action" onClick={() => mutate()}>
                Confirm
              </button>
            </>
          )}
        </div>
        {isError && (
          <ErrorBlock
            title="Failed to delete service"
            message="Please check your connection and try again."
          />
        )}
      </Modal>
      <button className="delete-service" onClick={() => dialog.current.open()}>
        Delete
      </button>
      ;
    </>
  );
}
