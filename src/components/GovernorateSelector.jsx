import { useQuery } from "@tanstack/react-query";

import { get } from "../util/http/methods/get.js";

export default function GovernorateSelector({ value, onChange }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["governorates"],
    queryFn: () => get("SeededValues/Governorates"),
  });

  let content;

  if (isError) {
    content = (
      <p style={{ margin: "0.25rem", color: "var(--color-danger)" }}>
        Failed to fetch Governorates.
      </p>
    );
  }

  if (isLoading) {
    content = <p style={{ margin: "0.25rem" }}>Loading...</p>;
  }

  if (data) {
    const governorates = data.governorates.map((governorate) => (
      <option key={governorate.id} value={governorate.id}>
        {governorate.name}
      </option>
    ));

    content = (
      <select
        value={value}
        name="governorates"
        id="select-governorate"
        className="governorate-selector"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" disabled>
          Choose Governorate
        </option>
        {governorates}
      </select>
    );
  }

  return (
    <div className="input">
      {!data && (
        <p style={{ margin: 0, color: "var(--color-neuter)" }}>Governorate</p>
      )}
      {data && (
        <label htmlFor="select-governorate" className="input-label">
          Governorate
        </label>
      )}
      {content}
    </div>
  );
}
