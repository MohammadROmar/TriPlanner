import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import EmptyPage from "../../components/EmptyPage.jsx";
import Subservice from "../../components/Subservice/Subservice.jsx";
import ErrorElement from "../../components/UI/ErrorElement/ErrorElement.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setSubservice } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";

import "./SubServices.css";
import DeleteServiceBtn from "../../components/DeleteServiceBtn/DeleteServiceBtn.jsx";

export default function SubServices() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  const serviceTypeName =
    serviceTypeId === 1 ? "rooms" : serviceTypeId === 2 ? "cars" : "trips";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["subservices", "services"],
    queryFn: () => get(`services/${service.id}/${serviceTypeName}`),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorElement />;
  }

  if (data) {
    if (data.length === 0) {
      return (
        <>
          {" "}
          <DeleteServiceBtn />
          <EmptyPage />
        </>
      );
    }

    return (
      <>
        <DeleteServiceBtn />
        <ul className="sub-services">
          {data.map((subservice) => {
            return (
              <Subservice
                key={subservice.id}
                title={
                  subservice.title
                    ? subservice.title
                    : subservice.name
                    ? subservice.name
                    : subservice.description
                }
                imagePath={subservice.imagePath}
                onClick={() => dispatch(setSubservice(subservice))}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
