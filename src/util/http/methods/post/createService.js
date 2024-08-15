import { domain } from "../../http.js";

export async function createService({ data }) {
  const serviceTypeId =
    data.ownerRole === "HotelOwner"
      ? 1
      : data.ownerRole === "CarRental"
      ? 2
      : 3;

  const url = domain + `api/governorates/${data.governorate}/services/add`;

  const token = localStorage.getItem("token");

  const requestFormData = new FormData();

  requestFormData.append("Name", data.name);
  requestFormData.append("OwnerId", data.ownerId);
  requestFormData.append("Address", data.address);
  requestFormData.append("ServiceMainImage", data.image);
  requestFormData.append("ServiceTypeId", serviceTypeId);
  requestFormData.append("Description", data.description);
  requestFormData.append("GovernorateId", data.governorate);
  requestFormData.append("ContactEmail", data["contact-email"]);
  requestFormData.append("ContactNumber", data["contact-number"]);
  requestFormData.append("HasWiFi", data.features.includes("cafe"));
  requestFormData.append("HasPool", data.features.includes("pool"));
  requestFormData.append("HasRestaurant", data.features.includes("restaurant"));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: requestFormData,
  });

  if (!response.ok) {
    const error = new Error(errorMessage || "Faild to post data");
    error.statusCode = response.status;
    error.info = await response.json();

    throw error;
  }
}
