import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import ErrorBlock from "./UI/ErrorBlock/ErrorBlock.jsx";

import { post } from "../util/http/methods/post/post.js";
import { showSnackbar } from "../store/slices/snackbar.js";

export default function FillWalletAction({ userDetails, onConfirm }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: post,
    onSuccess: () => {
      navigate("../");
      dispatch(showSnackbar({ message: "Wallet Filled Successfully" }));
    },
  });

  function handleSubmit() {
    onConfirm();

    if (!userDetails.hasError) {
      const data = {
        emailAddress: userDetails.emailAddress,
        amount: userDetails.amount,
      };

      mutate({ path: "Account/FillWallet", data });
    }
  }

  return (
    <>
      {isPending && <p className="submit">Submitting...</p>}

      {!isPending && (
        <div className="fill-wallet-actions">
          <button onClick={() => navigate("../")}>Close</button>
          <button className="submit" onClick={handleSubmit}>
            Fill
          </button>
        </div>
      )}

      {isError && (
        <ErrorBlock
          title="Faild to fill wallet"
          message="Please check your input and network and try again"
        />
      )}
    </>
  );
}
