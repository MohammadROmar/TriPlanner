import { NavLink } from "react-router-dom";

import { replaceSpaces } from "../../util/replace_spaces.js";
import { cardColors } from "../../data/colors.js";
import { governorates as dummyGovernorate } from "../../data/dummy_data.js";
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
  const governorates = dummyGovernorate.map((governorate, i) => (
    <Governorate key={governorate.id} covernorate={governorate} i={i} />
  ));

  return <ul className="governorates">{governorates}</ul>;
}
