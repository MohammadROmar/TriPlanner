import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import ScrollToTop from "../../components/ScrollToTop.jsx";
import Header from "../../components/Header/Header.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Root.css";

export default function RootLayout() {
  const location = useLocation();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const sideBarIsOpen = useSelector(state => state.backdrop.isOpen);

  const cssClasses =
    (sideBarIsOpen ? "active" : "") + (!isAuthenticated ? "hidden" : "");

  return (
    <>
      <ScrollToTop />
      <Header />
      {isAuthenticated && <SideBar />}
      <main id="content" className={cssClasses}>
        <motion.div
          key={location.pathname
            .replace("createServiceOwner", "")
            .replace("fillUserWallet", "")
            .replace("/createService", "")}
          id="root-page"
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
