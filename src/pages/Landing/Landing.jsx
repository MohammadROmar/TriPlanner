import Featue from '../../components/Featue/Featue.jsx';
import Hero from '../../components/Hero/Hero.jsx';

import { SERVICES } from '../../data/services.js';

import './Landing.css';

export default function LandingPage() {
  const services = SERVICES.map((service) => (
    <Featue key={service.title} service={service} />
  ));

  return (
    <>
      <Hero />

      <section id="our-services">
        <h2>What we offer</h2>
        <ul id="our-services__list">{services}</ul>
      </section>
    </>
  );
}
