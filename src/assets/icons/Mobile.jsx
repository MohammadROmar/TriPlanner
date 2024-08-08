export default function MobileIcon({ stroke, fill }) {
  stroke = stroke ?? "var(--color-neuter)";
  fill = fill ?? "var(--color-neuter)";

  return (
    <svg width="1.8rem" height="1.8rem" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7C6 5.11438 6 4.17157 6.58579 3.58579C7.17157 3 8.11438 3 10 3H12H14C15.8856 3 16.8284 3 17.4142 3.58579C18 4.17157 18 5.11438 18 7V12V17C18 18.8856 18 19.8284 17.4142 20.4142C16.8284 21 15.8856 21 14 21H12H10C8.11438 21 7.17157 21 6.58579 20.4142C6 19.8284 6 18.8856 6 17V12V7Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 18H12.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
