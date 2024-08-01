import { domain, headers } from "../http.js";

export async function post(path, body, errorMessage) {
  const url = domain + path;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to post data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const responseBody = await response.json();

  return responseBody;
}
