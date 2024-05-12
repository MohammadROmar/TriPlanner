import { redirect } from "react-router-dom";

export function authentication() {
  const auth = localStorage.getItem("Authenticated");

  return auth === "true";
}

export function authLoader() {
  const isAuthenticated = authentication();

  return !isAuthenticated ? redirect("/welcome") : null;
}

export function unauthLoader() {
  const isAuthenticated = authentication();

  return isAuthenticated ? redirect("/") : null;
}
