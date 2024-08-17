import { useState } from "react";

import { useInput } from "../../hooks/useInput.js";

import Input from "../../components/Input/Input.jsx";

import EmailIcon from "../../assets/icons/Email.jsx";
import PasswordIcon from "../../assets/icons/Password.jsx";
import LoginActions from "../../components/LoginActions/LoginActions.jsx";

import { validateEmail, validatePassword } from "../../util/validation.js";

import "./Login.css";

export default function LoginPage() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

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
    if (emailIsInvalid) {
      setEmailIsValid(false);
    }

    if (passwordIsInvalid) {
      setPasswordIsValid(false);
    }
  }

  return (
    <div className="login-page">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="login-input">
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
        </div>
        <div className="login-input">
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
        </div>
        <LoginActions
          email={enteredEmail}
          onConfirm={onConfirm}
          password={enteredPassword}
          hasInputError={emailIsInvalid || passwordIsInvalid}
        />
      </form>
    </div>
  );
}
