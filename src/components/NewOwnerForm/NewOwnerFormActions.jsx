import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import ErrorBlock from "../UI/ErrorBlock/ErrorBlock.jsx";

import { post } from "../../util/http/methods/post.js";

export default function NewOwnerFormActions({ ownerDetails, onConfirm }) {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: post
  });

  const navigate = useNavigate();

  function handleConfirm() {
    onConfirm();
    if (!ownerDetails.hasError) {
    }
  }

  return (
    <>
      <div className="owner-modal-actions">
        <button type="button" onClick={() => navigate("../")}>
          Close
        </button>
        <button type="button" onClick={handleConfirm} className="action neuter">
          Confirm
        </button>
      </div>
      {isError && (
        <ErrorBlock title="this is a title" message="this is a message" />
      )}
    </>
  );
}
