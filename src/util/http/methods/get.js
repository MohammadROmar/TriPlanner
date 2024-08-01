import { domain, headers } from "../http.js";

export async function get(path, errorMessage) {
  const url = domain + path;

  const response = await fetch(url, {
    headers,
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
