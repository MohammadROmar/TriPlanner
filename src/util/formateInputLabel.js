export function formateInputLabel(label) {
  let formattedLabel = label[0].toUpperCase();

  for (let i = 1; i < label.length; i++) {
    const char = label.charAt(i);
    const prevChar = label.charAt(i - 1);

    if (char === "-") {
      formattedLabel += " ";
    } else if (prevChar === "-") {
      formattedLabel += char.toUpperCase();
    } else {
      formattedLabel += char;
    }
  }

  return formattedLabel;
}
