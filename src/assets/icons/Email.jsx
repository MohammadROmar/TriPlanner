export default function Email({ isError }) {
  return (
    <svg width="1.8rem" height="1.8rem" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke={isError ? "var(--color-danger)" : "var(--color-neuter)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={isError ? "var(--color-danger)" : "var(--color-neuter)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
