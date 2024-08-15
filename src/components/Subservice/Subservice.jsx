import { useSelector } from "react-redux";

import Card from "../Card/Card.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";
import carImg from "../../assets/images/car-default.jpg";
import tripImg from "../../assets/images/trip-default.jpg";

import { formatImagePath } from "../../util/formatImagePath.js";

import "./Subservice.css";

export default function Subservice({ title, imagePath, ...props }) {
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  let image;
  if (imagePath) {
    image = formatImagePath(imagePath);
  }

  const backupImage =
    serviceTypeId === 1 ? hotelImg : serviceTypeId === 2 ? carImg : tripImg;

  return (
    <li className="service" {...props}>
      <Card
        to="details"
        background={`url(${
          image ?? backupImage
        }) center /cover no-repeat border-box`}
      >
        <h2 className="subsevice-title">{title}</h2>
      </Card>
    </li>
  );
}
