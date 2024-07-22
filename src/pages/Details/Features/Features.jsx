import WifiIcon from "../../../assets/icons/Wifi.jsx";
import PoolIcon from "../../../assets/icons/Pool.jsx";
import RestaurantIcon from "../../../assets/icons/Restaurant.jsx";

import "./Features.css";

export default function Features({ subservice }) {
  return (
    <div className="features">
      <h4 className="heading">Features</h4>
      <ul className="features-list">
        <li className="feature wifi">
          <WifiIcon />
          <p>Wifi</p>
        </li>
        <li className="feature restaurant">
          <RestaurantIcon />
          <p>Restaurant</p>
        </li>
        <li className="feature pool">
          <PoolIcon />
          <p>Pool</p>
        </li>
      </ul>
    </div>
  );
}
