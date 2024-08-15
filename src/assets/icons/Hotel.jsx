export default function HotelIcon({ stroke, fill }) {
  stroke = stroke ?? "white";
  fill = fill ?? "white";

  return (
    <svg
      width="1.7rem"
      height="1.7rem"
      viewBox="0 0 24 24"
      fill="none"
      style={{ padding: "0.1rem" }}
    >
      <path
        d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
