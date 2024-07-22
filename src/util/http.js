import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
const domain = protocol + "localhost:7219/api/";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YWNhZjY5ZC00Zjk2LTQzYTUtODcyZS1kYWY4NzM2NTZiY2UiLCJqdGkiOiJiZWUxMGE0YS1kYTEyLTQ1YjYtOGQ2Mi1mMjlmZDFiMjI3OTAiLCJlbWFpbCI6Im1hamQyMzFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImV4cCI6MTcyMTgzMzI5NywiaXNzIjoiUmVzdGF1cmFudEFwaSIsImF1ZCI6IlJlc3RhdXJhbnRBcGlDbGllbnQifQ.UXtnvssBKvTYflQHSLoijBYjmUahwq1jOQP3rcDYcdM",
};

export async function getGovernorates() {
  const url = domain + "SeededValues/Governorates";

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    const error = new Error(
      "An Error occured while fetching the governorates."
    );
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const governorates = await response.json();

  return governorates;
}

export async function getServiceTypes() {
  const url = domain + "SeededValues/ServiceTypes";

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    const error = new Error("An Error occured while fetching service types.");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const serviceTypes = await response.json();

  return serviceTypes;
}

export async function getServices(governorateId) {
  const url = domain + `governorates/${governorateId}/services`;

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    const error = new Error("An Error occured while fetching services.");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const services = await response.json();

  return services;
}

export async function getSubservices(governorateId, serviceTypeId, serviceId) {
  const url = domain + `governorates/${governorateId}/services`;

  const subserviceName = "";

  const response = await fetch(url, {
    headers,
  });

  if (!response.ok) {
    const error = new Error(
      `An Error occured while fetching the ${subserviceName}.`
    );
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }

  const services = await response.json();

  return services;
}
