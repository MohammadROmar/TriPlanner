import { Outlet } from "react-router-dom";

import Card from "../../components/Card/Card.jsx";

import { homeNavigation } from "../../data/homeNavigation.js";

import img from "../../assets/images/governorates.jpg";

import "./Home.css";

export default function Home() {
  const navigationItems = homeNavigation.map((nav) => (
    <li key={nav.title}>
      <Card to={nav.to} background={nav.background}>
        <p>{nav.title}</p>
      </Card>
    </li>
  ));

  return (
    <>
      <Outlet />
      <ul className="home-list">{navigationItems}</ul>
    </>
  );
}
