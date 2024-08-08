import { useState } from "react";
import { useInput } from "../../hooks/useInput.js";

import Input from "../Input/Input.jsx";
import Modal from "../UI/OpenedModal/OpenedModal.jsx";
import FillWalletAction from "../FillWalletAction.jsx";

import EmailIcon from "../../assets/icons/Email.jsx";
import AmountIcon from "../../assets/icons/Money.jsx";

import {
  isEmpty,
  validateEmail,
  includesLetter
} from "../../util/validation.js";

import "./FillWallet.css";

export default function FillWallet() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isInvalid: emailIsInvalid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur
  } = useInput("", value => validateEmail(value));

  const {
    value: enteredAmount,
    hasError: amountHasError,
    isInvalid: amountIsInvalid,
    handleInputChange: handleAmountChange,
    handleInputBlur: handleAmountBlur
  } = useInput("", value => !includesLetter(value) && !isEmpty(value));

  function onConfirm() {
    if (emailIsInvalid) {
      setEmailIsValid(false);
    }

    if (amountIsInvalid) {
      setAmountIsValid(false);
    }
  }

  return (
    <Modal title="Fill User's Wallet">
      <div className="fill-wallet-form">
        <Input
          name="email"
          icon={EmailIcon}
          value={enteredEmail}
          onBlur={handleEmailBlur}
          onChange={event => {
            handleEmailChange(event);
            setEmailIsValid(true);
          }}
          error={
            (!emailIsValid || emailHasError) &&
            "Please enter a valid email address"
          }
        />
        <Input
          type="text"
          name="amount"
          icon={AmountIcon}
          value={enteredAmount}
          onBlur={handleAmountBlur}
          onChange={event => {
            handleAmountChange(event);
            setAmountIsValid(true);
          }}
          error={
            (!amountIsValid || amountHasError) &&
            "Amount souldn't be empty, and shouldn't contain letters"
          }
        />
      </div>
      <FillWalletAction
        onConfirm={onConfirm}
        userDetails={{
          hasError: emailIsInvalid || amountIsInvalid,
          emailAddress: enteredEmail,
          amount: enteredAmount
        }}
      />
    </Modal>
  );
}
