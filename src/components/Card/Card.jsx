import { NavLink } from "react-router-dom";

import hotelImg from "../../assets/images/hotel_room.jpg";
import "./Card.css";

export default function Card({ service }) {
  return (
    <NavLink to="" className="card">
      <img src={hotelImg} alt="Image for the service." />
      <div className="card-details"></div>
    </NavLink>
  );
}
