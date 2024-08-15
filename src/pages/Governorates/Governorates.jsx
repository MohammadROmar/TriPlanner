import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import EmptyPage from "../../components/EmptyPage.jsx";
import ErrorElement from "../../components/UI/ErrorElement/ErrorElement.jsx";
import Governorate from "../../components/Governorate/Governorate.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setGovernorateId } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";
import { cardColors } from "../../data/colors.js";

import "./Governorates.css";

export default function Governorates() {
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["governorates"],
    queryFn: () => get("SeededValues/Governorates"),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorElement />;
  }

  if (data) {
    if (data.length === 0) {
      return <EmptyPage />;
    }

    return (
      <ul className="governorates">
        {data.governorates.map((governorate, i) => (
          <Governorate
            key={governorate.id}
            title={governorate.name}
            background={cardColors[i % 4].color}
            onClick={() => dispatch(setGovernorateId(governorate.id))}
          />
        ))}
      </ul>
    );
  }
}
