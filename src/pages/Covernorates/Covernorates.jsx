import { NavLink } from "react-router-dom";

import { replaceSpaces } from "../../util/replace_spaces.js";
import { covernorates as dummyCovernorate } from "../../data/dummy_data.js";

function Covernorate({ covernorate }) {
  console.log(covernorate);

  return (
    <li className="covernorate">
      <NavLink to={replaceSpaces(covernorate.name)}>{covernorate.name}</NavLink>
    </li>
  );
}

export default function Covernorates() {
  const covernorates = dummyCovernorate.map((covernorate) => {
    <Covernorate key={covernorate.id} />;
  });
  return <ul className="covernorates">{covernorates}</ul>;
}
