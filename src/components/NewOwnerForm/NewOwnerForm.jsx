import { useState } from "react";

import Roles from "../Roles.jsx";
import Input from "../Input/Input.jsx";
import Modal from "../UI/OpenedModal/OpenedModal.jsx";
import NewOwnerFormActions from "../NewOwnerFormActions.jsx";

import UserIcon from "../../assets/icons/User.jsx";
import EmailIcon from "../../assets/icons/Email.jsx";
import PasswordIcon from "../../assets/icons/Password.jsx";

import { useInput } from "../../hooks/useInput.js";

import {
  isEmpty,
  validateEmail,
  validatePassword,
} from "../../util/validation.js";

import "./NewOwnerForm.css";

export default function NewOwnerForm() {
  const [selectedRole, setSelectedRole] = useState("");
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
    <Modal title="Create Service Owner">
      <form className="create-owner-form">
        <Input
          type="text"
          name="user-name"
          icon={UserIcon}
          onBlur={handleUserNameBlur}
          onChange={handleUserNameChange}
          error={userNameHasError && "User name should not be empty."}
        />
        <Input
          name="email"
          onChange={(event) => {
            setEmailIsValid(true);
            handleEmailChange(event);
          }}
          icon={EmailIcon}
          onBlur={handleEmailBlur}
          error={
            (emailHasError || !emailIsValid) &&
            "Please enter a valid Email Address."
          }
        />
        <Input
          name="password"
          icon={PasswordIcon}
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
    </Modal>
  );
}
