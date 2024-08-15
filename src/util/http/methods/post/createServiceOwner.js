import { domain } from "../../http.js";

export async function createServiceOwner({ path, data }) {
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
