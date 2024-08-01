import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";
import { cardColors } from "../../data/colors.js";

import "./Governorate.css";

export default function Governorate({ governorate, i }) {
  return (
    <li className="governorate">
      <Card
        to={replaceSpaces(governorate.name)}
        state={{ governorateId: governorate.id }}
        background={cardColors[i % 4].color}
      >
        <p className="governorate-title">{governorate.name}</p>
      </Card>
    </li>
  );
}
