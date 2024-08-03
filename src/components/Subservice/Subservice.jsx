import Card from "../Card/Card.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";

import "./Subservice.css";

export default function Subservice({ title, background, ...props }) {
  return (
    <li className="service" {...props}>
      <Card
        to="details"
        background={
          background !== undefined
            ? background
            : `url(${hotelImg}) center /cover no-repeat border-box`
        }
      >
        <h2 className="subsevice-title">{title}</h2>
      </Card>
    </li>
  );
}
