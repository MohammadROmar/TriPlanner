import { domain } from "../../http.js";

export async function refreshToken() {
  const url = domain + "api/Account/RefreshToken";

  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  console.log(refreshToken);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      refreshToken: refreshToken,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.status);

  if (!response.ok) {
    const error = new Error();
    error.statusCode = response.status;

    throw error;
  }

  const responseBody = await response.json();

  return responseBody;
}
