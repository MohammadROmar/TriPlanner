import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";

export default function RootLayout() {
  const isStartPage = !useSelector((state) => state.auth.isAuthenticated);
  const backdropIsOpen = useSelector((state) => state.backdrop.isOpen);

  const cssClasses =
    (backdropIsOpen ? "active" : "") + (isStartPage ? "hidden" : "");

  return (
    <>
      <Header />
      <SideBar />
      <main id="content" className={cssClasses}>
        <Outlet />
      </main>
    </>
  );
}
