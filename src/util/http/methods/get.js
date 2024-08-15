import { domain } from "../http.js";

export async function get(path, errorMessage) {
  const url = domain + "api/" + path;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to get data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const responseBody = await response.json();

  return responseBody;
}
