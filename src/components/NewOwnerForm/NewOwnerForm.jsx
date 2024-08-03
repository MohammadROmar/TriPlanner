import { useState } from "react";

import Roles from "../Roles.jsx";
import Input from "../Input/Input.jsx";
import NewOwnerFormActions from "../NewOwnerFormActions.jsx";

import { useInput } from "../../hooks/useInput.js";

import {
  isEmpty,
  validateEmail,
  validatePassword,
} from "../../util/validation.js";

import "./NewOwnerForm.css";

export default function NewOwnerForm() {
  const [selectedRole, setSelectedRole] = useState();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const {
    value: enteredUserName,
    hasError: userNameHasError,
    handleInputChange: handleUserNameChange,
    handleInputBlur: handleUserNameBlur,
  } = useInput("", (value) => !isEmpty(value));

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isInvalid: emailIsInvalid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => validateEmail(value));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isInvalid: passwordIsInvalid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => validatePassword(value));

  function onConfirm() {
    if (passwordIsInvalid) {
      setPasswordIsValid(false);
    }

    if (emailIsInvalid) {
      setEmailIsValid(false);
    }
  }

  return (
    <>
      <div id="modal-content">
        <div id="create-owner-header">
          <h2 className="create-owner-title">Create Service Owner</h2>
          <div className="divider"></div>
        </div>
        <form className="create-owner-form">
          <Input
            id="user-name"
            name="User Name"
            type="text"
            onChange={handleUserNameChange}
            onBlur={handleUserNameBlur}
            error={userNameHasError && "User name should not be empty."}
          />
          <Input
            name="email"
            onChange={(event) => {
              setEmailIsValid(true);
              handleEmailChange(event);
            }}
            onBlur={handleEmailBlur}
            error={
              (emailHasError || !emailIsValid) &&
              "Please enter a valid Email Address."
            }
          />
          <Input
            name="password"
            onChange={(event) => {
              setPasswordIsValid(true);
              handlePasswordChange(event);
            }}
            onBlur={handlePasswordBlur}
            error={
              (passwordHasError || !passwordIsValid) &&
              "Password should contain numbers, poth capital & small letters and special characters."
            }
          />
          <Roles
            value={selectedRole}
            onChange={(value) => setSelectedRole(value)}
          />
        </form>
      </div>
      <NewOwnerFormActions
        ownerDetails={{
          hasError: userNameHasError || emailHasError || passwordHasError,
          userName: enteredUserName,
          email: enteredEmail,
          password: enteredPassword,
          role: selectedRole,
        }}
        onConfirm={onConfirm}
      />
    </>
  );
}
