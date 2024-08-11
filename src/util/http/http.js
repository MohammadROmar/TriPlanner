import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
export const domain = protocol + "localhost:7219/api/";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0M2E0ZjliMS1kYzVjLTQ5MTUtODBmMi1hM2JlZTBhOTE3YWQiLCJqdGkiOiI2OThmYjlkYy0xY2I0LTQ0YmUtYWQyYS01ODExY2M3YjA5NDkiLCJlbWFpbCI6IkFkbWluMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzIzMTk0MTcyLCJpc3MiOiJSZXN0YXVyYW50QXBpIiwiYXVkIjoiUmVzdGF1cmFudEFwaUNsaWVudCJ9.EYAgmNImqYdDjFatoMJ-Gnbng7Yigx1lqr6WhzDP0Kk";

export const authorization = "Bearer  " + accessToken;

export const headers = {
  "Content-Type": "application/json",
  Authorization: authorization,
};
