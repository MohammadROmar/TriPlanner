import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Service from "../../components/Service/Service.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setService } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";

import "./Services.css";

export default function ServicesPage() {
  const dispatch = useDispatch();
  const governorateId = useSelector((state) => state.service.governorateId);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

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
    if (data.length === 0) {
      content = <p className="center empty">There is no content in here!</p>;
    } else {
      content = data.map((service) => (
        <Service
          key={service.id}
          title={service.name}
          subtitle={service.address}
          onClick={() => dispatch(setService(service))}
        />
      ));
    }
  }

  return <ul className="services">{content}</ul>;
}
