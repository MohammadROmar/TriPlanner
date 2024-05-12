import { NavLink } from "react-router-dom";

import AnimatedButton from "../UI/Motion/AnimatedButton.jsx";
import "./TabItem.css";

export default function TabItem({ tab, onClick }) {
  return (
    <li className="side-bar__item">
      <NavLink className="navigate" to={tab.to} onClick={onClick} end>
        <AnimatedButton>
          <tab.Icon />
          <span>{tab.title}</span>
        </AnimatedButton>
      </NavLink>
    </li>
  );
}
