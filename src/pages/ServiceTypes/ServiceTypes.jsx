import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import ServiceType from "../../components/ServiceType/ServiceType.jsx";
import ErrorElement from "../../components/UI/ErrorElement/ErrorElement.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setServiceTypeId } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";
import { cardColors } from "../../data/colors.js";

import "./ServiceTypes.css";

export default function ServiceTypes() {
  const dispatch = useDispatch();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["service types", "governorates"],
    queryFn: () => get("SeededValues/ServiceTypes"),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorElement />;
  }

  if (data) {
    return (
      <ul className="service-types">
        {data.serviceTypes.map((serviceType, index) => (
          <ServiceType
            key={serviceType.id}
            title={serviceType.name}
            background={cardColors[index % 4].color}
            onClick={() => dispatch(setServiceTypeId(serviceType.id))}
          />
        ))}
      </ul>
    );
  }
}
