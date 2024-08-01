import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import Service from "../../components/Service/Service.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { get } from "../../util/http/methods/get.js";

import "./Services.css";

export default function ServicesPage() {
  const location = useLocation();
  const serviceTypeId = location.state.serviceTypeId;
  const governorateId = location.state.governorateId;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services", "service types", "governorates"],
    queryFn: () =>
      get(
        `governorates/${governorateId}/services/serviceTypes/${serviceTypeId}`,
        "An Error occured while fetching services."
      ),
  });

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isError) {
    content = (
      <p>
        {error.message} {error.info}
      </p>
    );
  }

  if (data) {
    content = data.map((service) => (
      <Service
        key={service.id}
        service={service}
        serviceTypeId={serviceTypeId}
      />
    ));
  }

  return <ul className="services">{content}</ul>;
}
