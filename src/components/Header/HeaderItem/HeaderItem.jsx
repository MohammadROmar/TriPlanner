import { NavLink } from "react-router-dom";

import AnimatedListItem from "../../UI/Motion/AnimatedListItem.jsx";
import "./HeaderItem.css";

export default function HeaderItem({ title, to }) {
  // const cssClasses =

  return (
    <AnimatedListItem>
      <NavLink className="header-navigation" to={to} end>
        {title}
      </NavLink>
    </AnimatedListItem>
  );
}
