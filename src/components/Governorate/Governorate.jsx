import Card from "../Card/Card.jsx";

import { domain } from "../../util/http/http.js";
import { replaceSpaces } from "../../util/replace_spaces.js";

import "./Governorate.css";

export default function Governorate({ title, background, ...props }) {
  const image = domain + "Images/Governorates/" + replaceSpaces(title) + ".jpg";

  return (
    <li className="governorate" {...props}>
      <Card
        to={replaceSpaces(title)}
        background={`url(${image}) center / cover no-repeat border-box, ${background}`}
      >
        <p className="governorate-title">{title}</p>
      </Card>
    </li>
  );
}
