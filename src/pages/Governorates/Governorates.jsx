import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Governorate from "../../components/Governorate/Governorate.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { setGovernorateId } from "../../store/slices/service.js";
import { get } from "../../util/http/methods/get.js";
import { cardColors } from "../../data/colors.js";

import "./Governorates.css";

export default function Governorates() {
  const dispatch = useDispatch();

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["governorates"],
    queryFn: () =>
      get(
        "SeededValues/Governorates",
        "An Error occured while fetching the governorates."
      ),
  });

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isError) {
    content = <p>{error.message}</p>;
  }

  if (data) {
    content = data.governorates.map((governorate, i) => (
      <Governorate
        key={governorate.id}
        title={governorate.name}
        background={cardColors[i % 4].color}
        onClick={() => dispatch(setGovernorateId(governorate.id))}
      />
    ));
  }

  return <ul className="governorates">{content}</ul>;
}
