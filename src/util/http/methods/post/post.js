import { domain } from "../../http.js";

export async function post({ path, data, errorMessage }) {
  const url = domain + "api/" + path;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to post data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  // const responseBody = await response.json();

  // return responseBody;
}
