import DarkModeIcon from "../../assets/icons/DarkModeIcon.jsx";
import LightModeIcon from "../../assets/icons/LightModeIcon.jsx";

import "./Theme.css";

export default function Theme() {
  return (
    <div id="theme">
      <button id="theme--dark">
        <DarkModeIcon />
      </button>
      <button id="theme--light" className="">
        <LightModeIcon />
      </button>
    </div>
  );
}
