import { domain } from "../http.js";

export async function deleteFn(path, errorMessage) {
  const url = domain + "api/" + path;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to delete data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }
}
