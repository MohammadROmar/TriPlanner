import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
export const domain = protocol + "localhost:7219/api/";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YWNhZjY5ZC00Zjk2LTQzYTUtODcyZS1kYWY4NzM2NTZiY2UiLCJqdGkiOiI1OTlkOWZiYi02YmZlLTRjODEtODgyMC0zYzdhMTdhN2UwYzciLCJlbWFpbCI6Im1hamQyMzFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImV4cCI6MTcyMjYyNzA4MiwiaXNzIjoiUmVzdGF1cmFudEFwaSIsImF1ZCI6IlJlc3RhdXJhbnRBcGlDbGllbnQifQ.E8GcOhA9xercfTb6oAr_byt46FVztUsm_X3A69XODYw";

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};
