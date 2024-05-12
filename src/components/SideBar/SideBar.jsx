import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import TABS from "../../data/tabs.js";
import TabItem from "../TabItem/TabItem.jsx";
import AnimatedButton from "../UI/Motion/AnimatedButton.jsx";
import LogoutIcon from "../../assets/icons/Logout.jsx";
import Modal from "../UI/Modal/Modal.jsx";
import { backdropActions } from "../../store/slices/backdrop.js";
import { authActions } from "../../store/slices/auth.js";
import "./SideBar.css";

export default function SideBar() {
  const dialog = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isStartPage = !useSelector(state => state.auth.isAuthenticated);
  const backdropIsOpen = useSelector(state => state.backdrop.isOpen);

  const cssClasses = isStartPage
    ? "hidden "
    : "side-bar " + (backdropIsOpen ? "active" : "");

  function handleTabClick() {
    dispatch(backdropActions.toggle());
  }

  function handleLogout() {
    handleTabClick();
    dialog.current.open();
  }

  function handleConfirm() {
    dispatch(authActions.logout());
    navigate("/welcome");
  }

  const tabs = TABS.map(tab => (
    <TabItem key={tab.title} tab={tab} onClick={handleTabClick} />
  ));

  return (
    <aside className={cssClasses}>
      <Modal ref={dialog} title="Logout" onConfirm={handleConfirm} isAlert>
        <p>Are you sure you want to logout?</p>
      </Modal>
      <nav>
        <ol id="side-bar__items">
          {tabs}
          <li className="side-bar__item">
            <AnimatedButton onClick={handleLogout}>
              <LogoutIcon />
              <span>Logout</span>
            </AnimatedButton>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
