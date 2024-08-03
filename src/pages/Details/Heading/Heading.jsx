import { useSelector } from "react-redux";

import LocationIcon from "../../../assets/icons/Location.jsx";
import RatingBar from "../../../components/RatingBar/RatingBar.jsx";

import "./Heading.css";

export default function Heading() {
  const service = useSelector((state) => state.service.service);
  const subservice = useSelector((state) => state.service.subservice);

  return (
    <>
      <h2 className="details__name heading">{service.name}</h2>
      <div className="details-heading">
        <section>
          <div className="details_title">
            <div className="details-location">
              <LocationIcon />
              <p>{service.address}</p>
            </div>
          </div>
          <div className="details-rating">
            <RatingBar rating={4.6} />
          </div>
        </section>
        <section className="service-price">
          <p>
            {subservice.pricePerNight ||
              subservice.pricePerMonth ||
              subservice.price}
            <span> S.P</span>
          </p>
          <p>
            {`Per ${
              subservice.pricePerNight
                ? "Night"
                : subservice.pricePerMonth
                ? "Month"
                : "Trip"
            }`}
          </p>
        </section>
      </div>
    </>
  );
}
