import { useQuery } from "@tanstack/react-query";

import { motion, AnimatePresence } from "framer-motion";

import { get } from "../util/http/methods/get.js";

export default function Roles({ error, value, onChange }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["roles"],
    queryFn: () => get("SeededValues/NonAdminRoles"),
  });

  let content;

  if (isLoading) {
    content = <p style={{ margin: "0.25rem" }}>Loading...</p>;
  }

  if (isError) {
    content = (
      <p style={{ margin: "0.25rem", color: "var(--color-danger)" }}>
        Failed to fetch owners roles.
      </p>
    );
  }

  if (data) {
    content = data.map(
      (role) =>
        role.name !== "User" && (
          <option key={role.name} value={role.name}>
            {role.name}
          </option>
        )
    );
  }

  return (
    <div className={`input${error ? " error" : ""}`}>
      {!data && <p style={{ margin: 0, color: "var(--color-neuter)" }}>Role</p>}
      {data && (
        <>
          <label htmlFor="select-role" className="input-label">
            Role
          </label>
          <select
            name="roles"
            value={value}
            id="select-roles"
            onChange={(event) => onChange(event.target.value)}
          >
            <option value="" disabled>
              Choose Role
            </option>
            {content}
          </select>
        </>
      )}
      {(isError || isLoading) && content}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="input-error"
          >
            No role selected
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
