import { useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AnimatedButton from "../UI/Motion/AnimatedButton.jsx";
import AnimatedListItem from "../UI/Motion/AnimatedListItem.jsx";
import LogoutIcon from "../../assets/icons/Logout.jsx";
import Modal from "../UI/Modal/Modal.jsx";
import { authActions } from "../../store/slices/auth.js";
import { backdropActions } from "../../store/slices/backdrop.js";
import "./LogoutItem.css";

export default function LogoutItem({ type }) {
  const dialog = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backdropIsOpen = useSelector(state => state.backdrop.isOpen);
  
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
  
  return (
    <>
      <Modal ref={dialog} title="Logout" onConfirm={handleConfirm} isAlert>
        <p>Are you sure you want to logout?</p>
      </Modal>
      {type === "sidebar" && (
        <li className="side-bar__item">
          <AnimatedButton onClick={handleLogout}>
            <LogoutIcon />
              <span>Logout</span>
          </AnimatedButton>
        </li>
      )} 
      {type === "header" && (
        <AnimatedListItem>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
        </AnimatedListItem>
      )}
    </>
  );
}