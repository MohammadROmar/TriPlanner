import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Theme from "../Theme/Theme.jsx";
import MainTitle from "./MainTitle/MainTitle.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.jsx";

import "./Header.css";

export default function Header() {
  const location = useLocation();

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  function handleCTA() {
    navigate("login");
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
          <button
            id="cta"
            onClick={handleCTA}
            style={{
              display: location.pathname.includes("login")
                ? "none"
                : "inline-block",
            }}
          >
            Login
          </button>
        )}
      </header>
    </>
  );
}
