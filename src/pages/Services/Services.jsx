import { NavLink } from "react-router-dom";

import { dummyServices } from "../../data/dummy_data.js";
import { replaceSpaces } from "../../util/replace_spaces.js";
import hotelImg from "../../assets/images/hotel_room.jpg";
import "./Services.css";

function Service({ service }) {
  return (
    <li className="service">
      <NavLink
        to={replaceSpaces(service.name)}
        state={{ service }}
        className="service-nav"
      >
        <div
          className="service-image"
          style={{
            background: `url(${hotelImg}) center /cover no-repeat border-box`,
          }}
        />
        <div className="service-details">
          <h2 className="service-name">{service.name}</h2>
          <h3 className="service-address">{service.address}</h3>
          <h3 className="service-description">{service.description}</h3>
        </div>
      </NavLink>
    </li>
  );
}

export default function ServicesPage() {
  const services = dummyServices.map((service) => (
    <Service service={service} />
  ));

  return <ul className="services">{...services}</ul>;
}
