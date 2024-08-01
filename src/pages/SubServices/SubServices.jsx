import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import Subservice from "../../components/Subservice/Subservice.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { get } from "../../util/http/methods/get.js";
import "./SubServices.css";

export default function SubServices() {
  const location = useLocation();
  const service = location.state.service;
  const serviceTypeId = location.state.serviceTypeId;

  const serviceTypeName =
    serviceTypeId === 1 ? "rooms" : serviceTypeId === 2 ? "cars" : "trips";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["subservices", "services"],
    queryFn: () =>
      get(
        `services/${service.id}/${serviceTypeName}`,
        `An Error occured while fetching the ${serviceTypeName}.`
      ),
  });

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isError) {
    content = <p>{error.info || error.message}</p>;
  }

  if (data) {
    if (data.length === 0) {
      <p className="center empty">There is no content in here!</p>;
    } else {
      content = data.map((subservice) => (
        <Subservice
          key={subservice.id}
          service={service}
          subservice={subservice}
          serviceTypeName={serviceTypeName}
          st={serviceTypeId}
        />
      ));
    }
  }

  return <ul className="sub-services">{content}</ul>;
}
