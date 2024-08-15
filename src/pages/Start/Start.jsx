import Featue from "../../components/Featue/Featue.jsx";
import Overview from "../../components/StartPageLeading/StartPageLeading.jsx";

import { SERVICES } from "../../data/services.js";

import "./Start.css";

export default function StartPage() {
  const services = SERVICES.map(service => (
    <Featue key={service.title} service={service} />
  ));

  return (
    <>
      <div id="start-container">
        <Overview />
      </div>
      <section id="our-services">
        <h2>What we offer</h2>
        <ul id="our-services__list">{services}</ul>
      </section>
    </>
  );
}
