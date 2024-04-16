import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import Theme from "../Theme/Theme.jsx";
import logoImg from "../../assets/images/logo.png";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import MenuIcon from "../../assets/icons/MenuIcon.jsx";
import { backdropActions } from "../../store/backdrop.js";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();
  const isStartPage = !useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Backdrop />
      <header id="main-header">
        <div id="main-title">
          <button
            id="side-bar__toggle"
            className={isStartPage ? "hidden" : ""}
            onClick={() => dispatch(backdropActions.toggle())}
          >
            <MenuIcon />
          </button>
          <img src={logoImg} alt="" />
          <h1>TriPlanner</h1>
        </div>
        <menu>
          <Theme />
          <button id="cta">
            <NavLink to="/register">Get Started</NavLink>
          </button>
        </menu>
      </header>
    </>
  );
}
