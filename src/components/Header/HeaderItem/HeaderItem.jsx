import { NavLink } from "react-router-dom";

import AnimatedListItem from "../../UI/Motion/AnimatedListItem.jsx";
import "./HeaderItem.css";

export default function HeaderItem({ title }) {
  return (
    <AnimatedListItem>
      <button className="nav-item">
        <NavLink className="navigation" to="">
          {title}
        </NavLink>
      </button>
    </AnimatedListItem>
  );
}
