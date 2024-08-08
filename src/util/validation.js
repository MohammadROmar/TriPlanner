function includesNumber(string) {
  const regularExpression = /[0-9]/;

  return regularExpression.test(string);
}

export function includesCapitalLetter(string) {
  const regularExpression = /[A-Z]/;

  return regularExpression.test(string);
}

function includesSmallLetter(string) {
  const regularExpression = /[a-z]/;

  return regularExpression.test(string);
}

export function includesLetter(string) {
  return includesCapitalLetter(string) || includesSmallLetter(string);
}

function includesSpecialCharacter(string) {
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
    includesNumber(password) &&
    includesSmallLetter(password) &&
    includesCapitalLetter(password) &&
    includesSpecialCharacter(password)
  );
}

export function validateServiceInput(input) {
  const {
    name,
    address,
    description,
    "contact-email": contactEmail,
    "contact-number": contactNumber
  } = input;

  const contactNumberIsValid =
    !isEmpty(contactNumber) &&
    contactNumber.length === 10 &&
    !includesLetter(contactNumber);

  return (
    !isEmpty(name) &&
    !isEmpty(address) &&
    contactNumberIsValid &&
    !isEmpty(description) &&
    validateEmail(contactEmail)
  );
}
