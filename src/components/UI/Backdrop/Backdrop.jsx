import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { backdropActions } from "../../../store/backdrop.js";
import "./Backdrop.css";

function Backdrop() {
  const dispatch = useDispatch();
  const backdropIsOpen = useSelector(state => state.backdrop.isOpen);

  const cssClasses = "backdrop" + (backdropIsOpen ? " active" : "");

  return createPortal(
    <div
      className={cssClasses}
      onClick={() => dispatch(backdropActions.toggle())}
    ></div>,
    document.getElementById("backdrop")
  );
}

export default Backdrop;
