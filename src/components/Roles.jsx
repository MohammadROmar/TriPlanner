import { useQuery } from "@tanstack/react-query";

import { get } from "../util/http/methods/get.js";

export default function Roles({ value, onChange }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["roles"],
    queryFn: () => get("SeededValues/Roles"),
  });

  let content;

  if (isLoading) {
    content = <p style={{ margin: "0.25rem" }}>Loading...</p>;
  }

  if (isError) {
    content = (
      <p style={{ margin: "0.25rem", color: "var(--color-danger)" }}>
        Failed to fitch owners roles.
      </p>
    );
  }

  if (data) {
    content = data.map((role) => (
      <option key={role.name} value={role.name}>
        {role.name}
      </option>
    ));
  }

  return (
    <div className="input">
      <label htmlFor="select-role" className="input-label">
        Role
      </label>
      {data && (
        <select
          name="roles"
          id="select-roles"
          value={value}
          // on={(event) => console.log(event.target.value + " selected")}
          onChange={(event) => onChange(event.target.value)}
        >
          {content}
        </select>
      )}
      {(isError || isLoading) && content}
    </div>
  );
}
