import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";

import "./Governorate.css";

export default function Governorate({ title, background, ...props }) {
  return (
    <li className="governorate" {...props}>
      <Card to={replaceSpaces(title)} background={background}>
        <p className="governorate-title">{title}</p>
      </Card>
    </li>
  );
}
