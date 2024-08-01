function containsNumber(string) {
  const regularExpression = /[0-9]/;

  return regularExpression.test(string);
}

function containsCapitalLetter(string) {
  const regularExpression = /[A-Z]/;

  return regularExpression.test(string);
}

function containsSmallLetter(string) {
  const regularExpression = /[a-z]/;

  return regularExpression.test(string);
}

function containsSpecialCharacter(string) {
  const regularExpression = /[!@#$%^&*(),.?":{}|<>]/;

  return regularExpression.test(string);
}

export function isEmpty(string) {
  return string.trim().length === 0 && string.length === 0;
}

function isEmail(string) {
  return string.includes("@");
}

export function validateEmail(email) {
  return !isEmpty(email) && isEmail(email);
}

export function validatePassword(password) {
  return (
    !isEmpty(password) &&
    password.length >= 8 &&
    containsNumber(password) &&
    containsSmallLetter(password) &&
    containsCapitalLetter(password) &&
    containsSpecialCharacter(password)
  );
}
