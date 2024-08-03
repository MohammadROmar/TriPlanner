import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
export const domain = protocol + "localhost:7219/api/";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0M2E0ZjliMS1kYzVjLTQ5MTUtODBmMi1hM2JlZTBhOTE3YWQiLCJqdGkiOiJmZTZlZTJkNy0zNDI4LTQ0ZjAtYTNmMS01ZTM0ZjY2ZDBmNGIiLCJlbWFpbCI6IkFkbWluMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzIyNzg2Mjc3LCJpc3MiOiJSZXN0YXVyYW50QXBpIiwiYXVkIjoiUmVzdGF1cmFudEFwaUNsaWVudCJ9.p7gtXQgrnKe6J0M9Ma7BZn4EFEhygtLeb0SRELDMkwc";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer  " + accessToken,
};
