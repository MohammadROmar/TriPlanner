import { useSelector, useDispatch } from 'react-redux';

import TABS from '../../data/tabs.js';
import TabItem from '../TabItem/TabItem.jsx';
import LogoutItem from '../LogoutItem/LogoutItem.jsx';
import { backdropActions } from '../../store/slices/backdrop.js';
import './SideBar.css';

export default function SideBar() {
  const dispatch = useDispatch();
  const isLandingPage = !useSelector((state) => state.auth.isAuthenticated);
  const backdropIsOpen = useSelector((state) => state.backdrop.isOpen);

  const cssClasses = isLandingPage
    ? 'hidden '
    : 'side-bar ' + (backdropIsOpen ? 'active' : '');

  function handleTabClick() {
    dispatch(backdropActions.toggle());
  }

  const tabs = TABS.map((tab) => (
    <TabItem key={tab.title} tab={tab} onClick={handleTabClick} />
  ));

  return (
    <aside className={cssClasses}>
      <nav>
        <ol id="side-bar__items">
          {tabs}
          <LogoutItem type="sidebar" />
        </ol>
      </nav>
    </aside>
  );
}
