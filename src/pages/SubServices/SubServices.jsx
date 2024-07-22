import { useLocation, NavLink } from "react-router-dom";

import { dummySubServices } from "../../data/dummy_data.js";
import { replaceSpaces } from "../../util/replace_spaces.js";
import hotelImg from "../../assets/images/hotel_room.jpg";
import "./SubServices.css";

function SubService({ service, subservice }) {
  return (
    // <li className="sub-service">
    //   <NavLink
    //     to={replaceSpaces(subservice.id.toString()) + "_details"}
    //     state={{ service, subservice }}
    //     className=""
    //   >
    //     <div className="sub-service-image"></div>
    //     <div className="sub-service-details">
    //       <div className="sub-service-details_title">
    //         <h2 className="sub-service-name">Just a dummy text</h2>
    //         <p className="sub-service-cost"></p>
    //       </div>
    //       <div className="sub-service-features"></div>
    //     </div>
    //   </NavLink>
    // </li>
    <li className="service">
      <NavLink
        to={replaceSpaces(subservice.name)}
        state={{ service, subservice }}
        className="sub-service-nav"
      >
        <div
          className="sub-service-image"
          style={{
            background: `url(${hotelImg}) center /cover no-repeat border-box`
          }}
        />
        <div className="sub-service-details">
          <div className="sub-service-title">
            <h2 className="sub-service-name">{service.name}</h2>
            {subservice.pricePerMonth && (
              <p className="sub-service-cost">
                {subservice.pricePerMonth}S.P / Month
              </p>
            )}
            {/* {subservice.pricePerNight && (
              <p className="sub-service-cost">{subservice.pricePerNight}S.P / Night</p>
            )} */}
          </div>
          <h3 className="sub-service-address">{service.address}</h3>
          <h3 className="sub-service-description">{service.description}</h3>
        </div>
      </NavLink>
    </li>
  );
}

export default function SubServices() {
  const location = useLocation();
  const service = location.state.service;

  const subservices = dummySubServices.map(subservice => (
    <SubService key={subservice.id} service={service} subservice={subservice} />
  ));

  return <ul className="sub-services">{subservices}</ul>;
}
