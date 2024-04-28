import Header from "../../components/Header/Header.jsx";
import Service from "../../components/Service/Service.jsx";

import { SERVICES } from "../../util/services.js";
import palmyraImg from "/palmyra.jpg";
import "./Start.css";

export default function StartPage() {
  const services = SERVICES.map(service => (
    <Service key={service.title} service={service} />
  ));

  return (
    <>
      <Header />
      <div id="start-container">
        <section id="over-view">
          <h1>Traviling Has Never Been This Easy!</h1>
          {/*<p>Best place to get your journey started!</p>*/}
        </section>
      </div>
      <section id="services">
        <h2>Our Best Services</h2>
        <ul id="services__list">{services}</ul>
      </section>
      <footer id="footer">
        <h4>TriPlanner</h4>
        <p>About us.</p>
        <div id="contact-metods">
          <p>Contact us.</p>
          {/*
            whatsapp icon
            telegram icon
            facebook icon
          */}
        </div>

        <p>Report an issue.</p>
      </footer>
    </>
  );
}
