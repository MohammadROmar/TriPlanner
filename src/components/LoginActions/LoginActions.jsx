import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import ErrorBlock from "../UI/ErrorBlock/ErrorBlock";

import { login } from "../../store/slices/auth.js";
import { login as loginFunction } from "../../util/http/methods/post/login.js";

import "./LoginActions.css";

export default function LoginActions({
  email,
  password,
  onConfirm,
  hasInputError,
}) {
  const dispatch = useDispatch();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginFunction,
    onSuccess: (data) => dispatch(login(data)),
  });

  function handleLogin() {
    onConfirm();

    if (!hasInputError) {
      mutate({ data: { email, password } });
    }
  }

  return (
    <>
      <div className="login-actions">
        {isPending && <p className="login-submit">Submitting...</p>}
        {!isPending && (
          <>
            <button type="reset">Reset</button>
            <button type="button" className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </>
        )}
      </div>
      {isError && (
        <div className="login-error">
          <ErrorBlock
            title={
              error.statusCode === 404
                ? "Accout doesn't Exist"
                : "Some thing went wrong"
            }
            message={
              error.statusCode === 1000
                ? "The account must be an admin"
                : "Please check your input & connection and try again"
            }
          />
        </div>
      )}
    </>
  );
}
