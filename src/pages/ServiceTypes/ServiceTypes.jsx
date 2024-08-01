import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import ServiceType from "../../components/ServiceType/ServiceType.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { get } from "../../util/http/methods/get.js";

import "./ServiceTypes.css";

export default function ServiceTypes() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["service types", "governorates"],
    queryFn: () =>
      get(
        "SeededValues/ServiceTypes",
        "An Error occured while fetching service types."
      ),
  });

  const location = useLocation();
  const governorateId = location.state.governorateId;

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isError) {
    content = <p>{error.info || error.message}</p>;
  }

  if (data) {
    content = data.map((serviceType, index) => (
      <ServiceType
        key={serviceType.id}
        serviceType={serviceType}
        governorateId={governorateId}
        index={index}
      />
    ));
  }

  return <ul className="service-types">{content}</ul>;
}
