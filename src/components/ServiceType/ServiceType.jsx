import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";
import { cardColors } from "../../data/colors.js";

import "./ServiceType.css";

export default function ServiceType({ serviceType, governorateId, index }) {
  return (
    <li className="service-type">
      <Card
        to={replaceSpaces(serviceType.name)}
        state={{ serviceTypeId: serviceType.id, governorateId }}
        background={cardColors[index % 4].color}
      >
        <p className="service-type-title">{serviceType.name}</p>
      </Card>
    </li>
  );
}
