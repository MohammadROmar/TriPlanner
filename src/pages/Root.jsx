import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import StartPage from "./Start/Start.jsx";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";

export default function RootLayout() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const backdropIsOpen = useSelector(state => state.backdrop.isOpen);

  const cssClasses =
    (backdropIsOpen ? "active" : "") + (!isAuthenticated ? "hidden" : "");

  return (
    <>
      <Header />
      <SideBar />
      <main id="content" className={cssClasses}>
        {isAuthenticated && <Outlet />}
        {!isAuthenticated && <StartPage />}
      </main>
    </>
  );
}
