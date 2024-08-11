import { Outlet, Link } from "react-router-dom";

import Card from "../../components/Card/Card.jsx";

import createNewOwnerImg from "../../assets/images/createNewOwner.jpg";
import fillWalletImg from "../../assets/images/fillWallet.jpg";
import serviceImg from "../../assets/images/service.jpg";
import governoratesImg from "../../assets/images/governorates.jpg";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Outlet />
      <ul className="home-list">
        <li>
          <Card
            to="createServiceOwner"
            background={`url(${createNewOwnerImg}) center /cover no-repeat border-box`}
          >
            <p>Create Service Owner</p>
          </Card>
        </li>

        <li>
          <Card
            to="fillUserWallet"
            background={`url(${fillWalletImg}) center /cover no-repeat border-box`}
          >
            <p>Fill user's wallet</p>
          </Card>
        </li>

        <li>
          <Card
            to="createServiceOwner/addService"
            background={`url(${serviceImg}) center /cover no-repeat border-box`}
          >
            <p>Create Service</p>
          </Card>
        </li>

        <li>
          <Card
            to="governorates"
            background={`url(${governoratesImg}) center /cover no-repeat border-box`}
          >
            <p>Covernorates</p>
          </Card>
        </li>
      </ul>
    </>
  );
}
