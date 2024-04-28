import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import MainTitle from "./MainTitle/MainTitle.jsx";
import Theme from "../Theme/Theme.jsx";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.jsx";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Backdrop />
      <header id="main-header">
        <div className="container">
          <MainTitle />
          <Theme />
        </div>
        <HeaderNavigation />
      </header>
    </>
  );
}
