import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import EmptyPage from "../../components/EmptyPage.jsx";
import Service from "../../components/Service/Service.jsx";
import ErrorElement from "../../components/UI/ErrorElement/ErrorElement.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setService } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";

import "./Services.css";

export default function ServicesPage() {
  const dispatch = useDispatch();
  const governorateId = useSelector((state) => state.service.governorateId);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["services", "service types", "governorates"],
    queryFn: () =>
      get(
        `governorates/${governorateId}/services/serviceTypes/${serviceTypeId}`
      ),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorElement />;
  }

  if (data) {
    console.log(data);

    if (data.length === 0) {
      return <EmptyPage />;
    }

    return (
      <ul className="services">
        {data.map((service) => (
          <Service
            key={service.id}
            title={service.name}
            subtitle={service.address}
            imagePath={service.imagePath}
            overallRate={service.overallRate}
            onClick={() => dispatch(setService(service))}
          />
        ))}
      </ul>
    );
  }
}
