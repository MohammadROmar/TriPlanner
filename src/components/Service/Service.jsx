import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";
import hotelImg from "../../assets/images/hotel_room.jpg";

import "./Service.css";

export default function Service({ title, subtitle, background, ...props }) {
  return (
    <li className="service" {...props}>
      <Card
        to={replaceSpaces(title)}
        background={`url(${hotelImg}) center /cover no-repeat border-box`}
      >
        <h2 className="service-name">{title}</h2>
        <h3 className="service-address">{subtitle}</h3>
      </Card>
    </li>
  );
}
