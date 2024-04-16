import Header from "../components/Header/Header.jsx";
import StartItem from "../components/StartItem/StartItem";
import { SERVICES } from "../util/services";

export default function StartPage() {
  const services = SERVICES.map((service) => (
    <StartItem key={service.title} service={service} />
  ));

  return (
    <>
      <ul id="services">{services}</ul>
    </>
  );
}
