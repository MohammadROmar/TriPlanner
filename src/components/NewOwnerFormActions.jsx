import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import ErrorBlock from "./UI/ErrorBlock/ErrorBlock.jsx";

import { createServiceOwner } from "../util/http/methods/post/createServiceOwner.js";

export default function NewOwnerFormActions({ ownerDetails, onConfirm }) {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createServiceOwner,
    onSuccess: () => navigate("../"),
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

      mutate({ path: "Account/RegisterServiceOwner", data });
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
