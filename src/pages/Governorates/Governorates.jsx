import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner.jsx";

import { getGovernorates } from "../../util/http.js";
import { replaceSpaces } from "../../util/replace_spaces.js";
import { cardColors } from "../../data/colors.js";

import "./Governorates.css";

function Governorate({ covernorate, i }) {
  return (
    <li className="governorate">
      <NavLink to={replaceSpaces(covernorate.name)} className="governorate-nav">
        <p
          style={{
            background: `${cardColors[i % 4].color}`,
            color: `${cardColors[i % 4].background}`,
          }}
        >
          {covernorate.name}
        </p>
      </NavLink>
    </li>
  );
}

export default function Governorates() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["governorates"],
    queryFn: getGovernorates,
    gcTime: 0,
    staleTime: 0,
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
      <Governorate key={governorate.id} covernorate={governorate} i={i} />
    ));
  }

  return <ul className="governorates">{content}</ul>;
}
