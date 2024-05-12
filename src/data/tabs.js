import HomeIcon from "../assets/icons/Home.jsx";
import FavoriteIcon from "../assets/icons/Favorite.jsx";
import SettingsIcon from "../assets/icons/Settings.jsx";
import InsightsIcon from "../assets/icons/Insights.jsx";

const TABS = [
  {
    Icon: HomeIcon,
    title: "Home",
    to: ""
  },
  {
    Icon: InsightsIcon,
    title: "Statistics",
    to: "statistics"
  },
  {
    Icon: FavoriteIcon,
    title: "Favorite",
    to: "favorite"
  },
  {
    Icon: SettingsIcon,
    title: "Settings",
    to: "settings"
  }
];

export default TABS;

export const START_TABS = [
  {
    title: "Services",
    // Icon: ,
    id: "services"
  },
  {
    title: "Offers",
    // Icon: ,
    id: "offers"
  }
];
