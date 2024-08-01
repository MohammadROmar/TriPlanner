import { useState } from "react";

export function useInput(initialValue, validationFunction) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const isInvalid = !validationFunction(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    hasError: didEdit && isInvalid,
    isInvalid,
    handleInputChange,
    handleInputBlur
  };
}
