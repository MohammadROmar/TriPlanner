import { useLocation, NavLink } from "react-router-dom";

import { dummySubServices } from "../../data/dummy_data.js";
import { replaceSpaces } from "../../util/replace_spaces.js";
import "./SubServices.css";

function SubService({ service, subService }) {
  return (
    <li className="sub-service">
      <NavLink
        to={replaceSpaces(subService.id.toString()) + "_details"}
        state={{ service, subService }}
        className=""
      >
        <div className="sub-service-image"></div>
        <div className="sub-service-details">
          <div className="sub-service-details_title">
            <h2 className="sub-service-name">Just a dummy text</h2>
            <p className="sub-service-cost"></p>
          </div>
          <div className="sub-service-features"></div>
        </div>
      </NavLink>
    </li>
  );
}

export default function SubServices() {
  const location = useLocation();
  const service = location.state.service;

  const subServices = dummySubServices.map((subService) => (
    <SubService key={subService.id} service={service} subService={subService} />
  ));

  return <ul id="sub-services">{subServices}</ul>;
}
