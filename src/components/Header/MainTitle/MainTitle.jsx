import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import MenuIcon from "../../../assets/icons/Menu.jsx";
import { backdropActions } from "../../../store/slices/backdrop.js";
import logoImg from "/logo.png";
import "./MainTitle.css";

export default function MainTitle() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div id="main-title">
      <button
        id="side-bar__toggle"
        className={!isAuthenticated ? "hidden" : ""}
        onClick={() => dispatch(backdropActions.toggle())}
      >
        <MenuIcon />
      </button>
      <NavLink to={isAuthenticated ? "/" : "/welcome"} id="nav-home">
        <img src={logoImg} alt="" />
        <h1>TriPlanner</h1>
      </NavLink>
    </div>
  );
}
