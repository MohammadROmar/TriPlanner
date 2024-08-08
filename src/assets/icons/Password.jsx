export default function Password({isError}) {
  return (
    <svg width="1.8rem" height="1.8rem" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 9L9.59309 9C9.59309 9 8.5 7 6 7C3.5 7 2 8.79086 2 11C2 13.2091 3.5 15 6 15C8.5 15 9.59309 13 9.59309 13L15 13L15 17L19 17L19 13L21 13L21 9Z"
        stroke={isError ? "var(--color-danger)" : "var(--color-neuter)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12.5C5.17157 12.5 4.5 11.8284 4.5 11C4.5 10.1716 5.17157 9.5 6 9.5C6.82843 9.5 7.5 10.1716 7.5 11C7.5 11.8284 6.82843 12.5 6 12.5Z"
        fill={isError ? "var(--color-danger)" : "var(--color-neuter)"}
      />
    </svg>
  );
}
