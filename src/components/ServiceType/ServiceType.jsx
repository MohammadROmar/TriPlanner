import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";

import "./ServiceType.css";

export default function ServiceType({ title, background, ...props }) {
  return (
    <li className="service-type" {...props}>
      <Card to={replaceSpaces(title)} background={background}>
        <p className="service-type-title">{title}</p>
      </Card>
    </li>
  );
}
