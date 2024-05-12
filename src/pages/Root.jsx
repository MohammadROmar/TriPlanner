import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import ScrollToTop from "../components/ScrollToTop.jsx";
import StartPage from "./Start/Start.jsx";
import DashboardPage from "./Dashboard/Dashboard.jsx";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function RootLayout() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const sideBarIsOpen = useSelector(state => state.backdrop.isOpen);

  const location = useLocation();

  const cssClasses =
    (sideBarIsOpen ? "active" : "") + (!isAuthenticated ? "hidden" : "");

  return (
    <>
      <ScrollToTop />
      <Header />
      <SideBar />
      <main
        id="content"
        className={cssClasses}
        style={
          !isAuthenticated
            ? {
                gridColumnStart: "1",
                gridColumnEnd: "-1"
              }
            : undefined
        }
      >
        <motion.div
          key={location.pathname}
          id="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
