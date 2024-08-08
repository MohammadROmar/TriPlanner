import { useSelector } from "react-redux";

import Card from "../Card/Card.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";
import carImg from "../../assets/images/car-default.jpg";
import tripImg from "../../assets/images/trip-default.jpg";

import "./Subservice.css";

export default function Subservice({ title, background, ...props }) {
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  const image =
    serviceTypeId === 1 ? hotelImg : serviceTypeId === 2 ? carImg : tripImg;

  return (
    <li className="service" {...props}>
      <Card
        to="details"
        background={
          background !== undefined
            ? background
            : `url(${image}) center /cover no-repeat border-box`
        }
      >
        <h2 className="subsevice-title">{title}</h2>
      </Card>
    </li>
  );
}
