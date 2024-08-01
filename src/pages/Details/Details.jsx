import { useLocation } from "react-router-dom";

import LocationIcon from "../../assets/icons/Location.jsx";
import hotelImg from "../../assets/images/hotel_room.jpg";
import "./Details.css";
import RatingBar from "../../components/RatingBar/RatingBar.jsx";
import Description from "./Description/Description.jsx";
import Features from "./Features/Features.jsx";
import ContactMethods from "./ContactMethods/ContactMethods.jsx";
import Actions from "./Actions/Actions.jsx";

export default function DetailsPage() {
  const location = useLocation();
  const service = location.state.service;
  const subservice = location.state.subservice;
  const serviceTypeName = location.state.serviceTypeName;
  const st = location.state.st;

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
          <h2 className="details__name heading">{service.name}</h2>
          <div className="details_title">
            <div className="details-location">
              <LocationIcon />
              <p>{service.address}</p>
            </div>
            <p>
              {service.cost} <span>S.P</span>
            </p>
          </div>
          <div className="details-rating">
            <RatingBar rating={4.6} />
          </div>
          <Description service={service} subservice={subservice} stId={st} />
          <Features />
          <ContactMethods service={service} />
        </div>
        <Actions
          serId={service.id}
          subserId={subservice.id}
          serviceTypeName={serviceTypeName}
        />
      </div>
    </div>
  );
}
