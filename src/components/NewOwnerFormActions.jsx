import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import ErrorBlock from "./UI/ErrorBlock/ErrorBlock.jsx";

import { createServiceOwner } from "../util/http/methods/post/createServiceOwner.js";
import { set } from "../store/slices/owner.js";
import { showSnackbar } from "../store/slices/snackbar.js";

export default function NewOwnerFormActions({ ownerDetails, onConfirm }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createServiceOwner,
    onSuccess: (data) => {
      dispatch(set({ id: data.newOwnerId, role: ownerDetails.role }));
      dispatch(showSnackbar({ message: "Owner Created Successfully" }));

      navigate("addService");
    },
  });

  function handleConfirm() {
    onConfirm();

    if (!ownerDetails.hasError) {
      const data = {
        userName: ownerDetails.userName,
        email: ownerDetails.email,
        password: ownerDetails.password,
        role: ownerDetails.role,
      };

      const ownerId = mutate({
        path: "Account/RegisterServiceOwner",
        data,
      });
    }
  }

  return (
    <>
      {isPending && <p className="submit-owner">Submitting...</p>}
      {!isPending && (
        <div className="owner-modal-actions">
          <button type="button" onClick={() => navigate("../")}>
            Close
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="action neuter"
          >
            Confirm
          </button>
        </div>
      )}
      {isError && (
        <ErrorBlock
          title={"Something went wrong!"}
          message={
            "Please check your connection & each input field and try again."
          }
        />
      )}
    </>
  );
}
