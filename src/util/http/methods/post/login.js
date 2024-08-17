import { domain } from "../../http.js";

export async function login({ data }) {
  const url = domain + "api/Account/Login";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error();
    error.statusCode = response.status;

    throw error;
  }

  const responseBody = await response.json();

  if (responseBody.role !== "Administrator") {
    const error = new Error();
    error.statusCode = 1000;

    throw error;
  }

  return responseBody;
}
