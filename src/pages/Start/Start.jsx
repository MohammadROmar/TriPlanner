import { motion, useScroll, useTransform } from "framer-motion";

import Featue from "../../components/Featue/Featue.jsx";

import { SERVICES } from "../../data/services.js";
import aleppoCastleImg from "/aleppo_castle.jpg";
import fourSeasonsImg from "/four_seasons.jpg";
import restaurantImg from "/restaurant.jpg";
import "./Start.css";

export default function StartPage() {
  const { scrollY } = useScroll();

  const textX = useTransform(scrollY, [0, 100], [0, 50]);
  const textY = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 200]);
  const textScale = useTransform(scrollY, [0, 150], [1, 1.2]);

  const aleppoCastleX = useTransform(scrollY, [0, 500], [0, -100]);
  const fourSeasonsX = useTransform(scrollY, [0, 500], [0, 100]);

  const restaurantY = useTransform(scrollY, [0, 500], [0, -200]);

  const windowY = useTransform(scrollY, [0, 200, 300], [0, -100, -150]);

  const imagesOpacity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.8, 0.5, 0.1]
  );
  const windowOpacity = useTransform(scrollY, [0, 150, 300], [1, 0.25, 0]);

  const services = SERVICES.map((service) => (
    <Featue key={service.title} service={service} />
  ));

  return (
    <>
      <div id="start-container">
        <section id="overview">
          <motion.div
            className="window"
            style={{
              y: windowY,
              opacity: windowOpacity,
            }}
          />
          <motion.h1
            style={{
              x: textX,
              y: textY,
              scale: textScale,
            }}
          >
            Explore <span>Syria</span>
            <br />
            With Us!
          </motion.h1>
          <motion.div
            className="image-container"
            style={{
              x: aleppoCastleX,
              left: "4%",
              top: "7%",
              width: "40%",
              height: "35%",
              background: `url(${aleppoCastleImg}) top /cover no-repeat border-box`,
              opacity: imagesOpacity,
            }}
          />
          <motion.div
            className="image-container"
            style={{
              y: restaurantY,
              top: "5%",
              right: "2%",
              width: "45%",
              height: "40%",
              background: `url(${restaurantImg}) center /cover no-repeat border-box`,
              opacity: imagesOpacity,
            }}
          />
          <motion.div
            className="image-container"
            style={{
              x: fourSeasonsX,
              bottom: "15%",
              left: "12%",
              width: "80%",
              height: "35%",
              background: `url(${fourSeasonsImg}) center /cover no-repeat border-box`,
              opacity: imagesOpacity,
            }}
          />
        </section>
      </div>
      <section id="our-services">
        <h2>What we offer</h2>
        <ul id="our-services__list">{services}</ul>
      </section>
    </>
  );
}
