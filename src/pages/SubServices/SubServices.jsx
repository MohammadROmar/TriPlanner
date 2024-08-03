import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Subservice from "../../components/Subservice/Subservice.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setSubservice } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";

import "./SubServices.css";

export default function SubServices() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

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
      content = <p className="center empty">There is no content in here!</p>;
    } else {
      content = data.map((subservice) => (
        <Subservice
          key={subservice.id}
          title={
            subservice.title !== undefined
              ? subservice.title
              : subservice.name !== undefined
              ? subservice.name
              : subservice.description
          }
          onClick={() => dispatch(setSubservice(subservice))}
        />
      ));
    }
  }

  return (
    <>
      <ul className="sub-services">{content}</ul>
    </>
  );
}
