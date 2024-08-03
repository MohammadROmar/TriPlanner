import { useSelector } from "react-redux";

import Description from "./Description/Description.jsx";
import Features from "./Features/Features.jsx";
import ContactMethods from "./ContactMethods/ContactMethods.jsx";
import Actions from "./Actions/Actions.jsx";
import Heading from "./Heading/Heading.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";

import "./Details.css";

export default function DetailsPage() {
  const subservice = useSelector((state) => state.service.subservice);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  return (
    <div className="details-page">
      <div
        className="details-image"
        style={{
          background: `url(${hotelImg}) center /cover no-repeat border-box`,
        }}
      />
      <div className="details">
        <div>
          <Heading />
          <Description />
          {serviceTypeId === 1 && <Features />}
          <ContactMethods />
        </div>
        <Actions />
      </div>
    </div>
  );
}
