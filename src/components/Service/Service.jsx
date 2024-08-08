import { useSelector } from "react-redux";

import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";

import hotelImg from "../../assets/images/hotel_room.jpg";
import carImg from "../../assets/images/car-default.jpg";
import tripImg from "../../assets/images/trip-default.jpg";

import "./Service.css";

export default function Service({ title, subtitle, background, ...props }) {
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  const image =
    serviceTypeId === 1 ? hotelImg : serviceTypeId === 2 ? carImg : tripImg;

  return (
    <li className="service" {...props}>
      <Card
        to={replaceSpaces(title)}
        background={`url(${image}) center /cover no-repeat border-box`}
      >
        <h2 className="service-name">{title}</h2>
        <h3 className="service-address">{subtitle}</h3>
      </Card>
    </li>
  );
}
