import Card from "../Card/Card.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";

import "./Subservice.css";

export default function Subservice({
  service,
  subservice,
  serviceTypeName,
  st,
}) {
  return (
    <li className="service">
      <Card
        to="details"
        state={{ service, subservice, serviceTypeName, st }}
        background={`url(${hotelImg}) center /cover no-repeat border-box`}
      >
        <h2 className="subsevice-title">{subservice.description}</h2>
      </Card>
    </li>
  );
}
