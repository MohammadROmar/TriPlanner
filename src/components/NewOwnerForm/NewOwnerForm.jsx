import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Input/Input.jsx";
import NewOwnerFormActions from "./NewOwnerFormActions.jsx";

import { useInput } from "../../hooks/useInput.js";

import { dummyServiceTypes } from "../../data/dummy_data.js";
import {
  isEmpty,
  validateEmail,
  validatePassword
} from "../../util/validation.js";

import "./NewOwnerForm.css";

export default function NewOwnerForm() {
  const navigate = useNavigate();

  const [selectedServiceType, setSelectedServiceType] = useState(1);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const {
    value: enteredUserName,
    hasError: userNameHasError,
    isInvalid: userNameIsInvalid,
    handleInputChange: handleUserNameChange,
    handleInputBlur: handleUserNameBlur
  } = useInput("", value => !isEmpty(value));

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isInvalid: emailIsInvalid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur
  } = useInput("", value => validateEmail(value));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isInvalid: passwordIsInvalid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur
  } = useInput("", value => validatePassword(value));

  const serviceTypes = dummyServiceTypes.map(st => (
    <option key={st.id} value={st.id}>
      {st.name}
    </option>
  ));

  function onConfirm() {
    if (!emailIsInvalid && !passwordIsInvalid) {
      navigate("../");
    }

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
            onChange={event => {
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
            onChange={event => {
              setPasswordIsValid(true);
              handlePasswordChange(event);
            }}
            onBlur={handlePasswordBlur}
            error={
              (passwordHasError || !passwordIsValid) &&
              "Password should contain numbers, poth capital & small letters and special characters."
            }
          />
          <div className="input">
            <label htmlFor="select-service-types" className="input-label">
              Service Type
            </label>
            <select
              name="service-types"
              id="select-service-types"
              value={selectedServiceType}
              onChange={event => setSelectedServiceType(event.target.value)}
            >
              {serviceTypes}
            </select>
          </div>
        </form>
      </div>
      <NewOwnerFormActions
        ownerDetails={{
          hasError: userNameHasError || emailHasError || passwordHasError,
          userName: enteredUserName,
          email: enteredEmail,
          password: enteredPassword
        }}
        onConfirm={onConfirm}
      />
    </>
  );
}
