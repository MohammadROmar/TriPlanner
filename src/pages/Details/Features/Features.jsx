import { useSelector } from "react-redux";

import WifiIcon from "../../../assets/icons/Wifi.jsx";
import PoolIcon from "../../../assets/icons/Pool.jsx";
import RestaurantIcon from "../../../assets/icons/Restaurant.jsx";

import "./Features.css";

export default function Features() {
  const service = useSelector((state) => state.service.service);
  const hasFeatures =
    service.hasWiFi || service.hasPool || service.hasRestaurant;

  return (
    hasFeatures && (
      <div className="features">
        <h4 className="heading">Features</h4>
        <ul className="features-list">
          {service.hasWiFi && (
            <li className="feature wifi">
              <WifiIcon />
              <p>Wifi</p>
            </li>
          )}
          {service.hasRestaurant && (
            <li className="feature restaurant">
              <RestaurantIcon />
              <p>Restaurant</p>
            </li>
          )}
          {service.hasPool && (
            <li className="feature pool">
              <PoolIcon />
              <p>Pool</p>
            </li>
          )}
        </ul>
      </div>
    )
  );
}
