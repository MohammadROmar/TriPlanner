import Card from "../Card/Card.jsx";

import { domain } from "../../util/http/http.js";
import { replaceSpaces } from "../../util/replace_spaces.js";
import { separateString } from "../../util/separateString.js";

import "./ServiceType.css";

export default function ServiceType({ title, background, ...props }) {
  const image = domain + "Images/ServiceTypes/" + title + ".jpg";

  return (
    <li className="service-type" {...props}>
      <Card
        to={replaceSpaces(title)}
        background={`url(${image}) center / cover no-repeat border-box, ${background}`}
      >
        <p className="service-type-title">{`${separateString(title)}s`}</p>
      </Card>
    </li>
  );
}
