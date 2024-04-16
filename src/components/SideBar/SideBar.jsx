import { useSelector } from "react-redux";

import TABS from "../../util/tabs.js";
import TabItem from "../TabItem/TabItem.jsx";
import "./SideBar.css";

export default function SideBar() {
  const isStartPage = !useSelector((state) => state.auth.isAuthenticated);
  const backdropIsOpen = useSelector((state) => state.backdrop.isOpen);

  const cssClasses = isStartPage
    ? "hidden "
    : "side-bar " + (backdropIsOpen ? "active" : "");

  const tabs = TABS.map((tab) => <TabItem key={tab.title} tab={tab} />);

  return (
    <aside>
      <nav className={cssClasses}>
        <ol id="side-bar__items">{tabs}</ol>
      </nav>
    </aside>
  );
}
