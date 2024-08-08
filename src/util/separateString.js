import { includesCapitalLetter } from "./validation.js";

export function separateString(string) {
  let serparatedString = string.charAt(0).toUpperCase();

  for (let i = 1; i < string.length; i++) {
    const char = string.charAt(i);

    serparatedString += (includesCapitalLetter(char) ? " " : "") + char;
  }

  return serparatedString;
}
