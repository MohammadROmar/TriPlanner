import { domain, headers } from "../http.js";

export async function deleteFn(path, errorMessage) {
  const url = domain + path;

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to delete data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const responseBody = await response.json();

  return responseBody;
}
