import { domain, headers } from "../../http.js";

export async function createServiceOwner({ path, data }) {
  const url = domain + path;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  });

  if (!response.ok) {
    const error = new Error("Something went wrong!");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const responseBody = await response.json();

  if (responseBody.newOwnerId?.includes("Error")) {
    const error = new Error("Couldn't create new owner");
    error.statusCode = response.status;
    error.info = "Owner's email already exists";

    throw error;
  }

  return responseBody;
}
