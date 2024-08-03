import { Outlet, Link } from "react-router-dom";

import Card from "../../components/Card/Card.jsx";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Outlet />
      <ul className="home-list">
        <li>
          <Card to="createServiceOwner" background="lightblue">
            <p>Create Service Owner</p>
          </Card>
        </li>
        <li>
          <Card to="governorates" background="lightblue">
            <p>Covernorates</p>
          </Card>
        </li>
      </ul>
    </>
  );
}
