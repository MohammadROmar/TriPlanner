import Card from "../Card/Card.jsx";

import { replaceSpaces } from "../../util/replace_spaces.js";
import hotelImg from "../../assets/images/hotel_room.jpg";

import "./Service.css";

export default function Service({ service, serviceTypeId }) {
  return (
    <li className="service">
      {/* <Link
        to={replaceSpaces(service.name)}
        state={{ service, serviceTypeId }}
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
      </Link> */}
      <Card
        to={replaceSpaces(service.name)}
        state={{ service, serviceTypeId }}
        background={`url(${hotelImg}) center /cover no-repeat border-box`}
      >
        <h2 className="service-name">{service.name}</h2>
        <h3 className="service-address">{service.address}</h3>
        {/* <h3 className="service-description">{service.description}</h3> */}
      </Card>
    </li>
  );
}
