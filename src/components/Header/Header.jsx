import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import MainTitle from "./MainTitle/MainTitle.jsx";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.jsx";
import Theme from "../Theme/Theme.jsx";
import { authActions } from "../../store/slices/auth.js";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch(authActions.login);

  function handleCTA() {
    dispatch(authActions.login());
    navigate("/");
  }

  return (
    <>
      <Backdrop />
      <header id="main-header">
        <div className="container">
          <MainTitle />
          {isAuthenticated && <HeaderNavigation />}
          <Theme />
        </div>
        {!isAuthenticated && (
          <button id="cta" onClick={handleCTA}>
            Get Started
          </button>
        )}
      </header>
    </>
  );
}
