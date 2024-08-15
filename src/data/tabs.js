import HomeIcon from "../assets/icons/Home.jsx";
import SyriaIcon from "../assets/icons/Syria.jsx";
import InsightsIcon from "../assets/icons/Insights.jsx";

const TABS = [
  {
    Icon: HomeIcon,
    title: "Home",
    to: "",
  },
  {
    Icon: InsightsIcon,
    title: "Statistics",
    to: "statistics",
  },
  {
    Icon: SyriaIcon,
    title: "Governorates",
    to: "governorates",
  },
];

export default TABS;

export const START_TABS = [
  {
    title: "Services",
    // Icon: ,
    id: "services",
  },
  {
    title: "Offers",
    // Icon: ,
    id: "offers",
  },
];
