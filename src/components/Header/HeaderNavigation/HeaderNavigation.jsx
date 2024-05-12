import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedListItem from "../../UI/Motion/AnimatedListItem.jsx";
import HeaderItem from "../HeaderItem/HeaderItem.jsx";
import { authActions } from "../../../store/slices/auth.js";
import TABS from "../../../data/tabs.js";
import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch(authActions.login);

  return (
    <nav id="header-nav">
      <motion.ul
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
        animate="animate"
        className="nav-list"
      >
        {isAuthenticated &&
          TABS.map(tab => <HeaderItem key={tab.title} title={tab.title} />)}
      </motion.ul>
      {!isAuthenticated && (
        <button
          id="cta"
          onClick={() => {
            dispatch(authActions.login());
            navigate("/");
          }}
        >
          Get Started
        </button>
      )}
    </nav>
  );
}
