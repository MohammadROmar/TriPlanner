import { useSelector } from "react-redux";

import AnimatedListItem from "../UI/Motion/AnimatedListItem.jsx";
import WhatsappIcon from "../../assets/icons/Whatsapp.jsx";
import TelegramIcon from "../../assets/icons/Telegram.jsx";
import FacebookIcon from "../../assets/icons/Facebook.jsx";

import "./Footer.css";

const animation = { scale: 1, opacity: 1 };

export default function Footer() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <footer
      id="footer"
      style={
        !isAuthenticated
          ? { gridColumnStart: "1", gridColumnEnd: "-1" }
          : undefined
      }
    >
      <p>About us.</p>
      <p>Social media: </p>
      <ul id="contact-methods">
        <AnimatedListItem animate={animation} className="contact-method">
          <a href="">
            <WhatsappIcon />
          </a>
        </AnimatedListItem>
        <AnimatedListItem animate={animation} className="contact-method">
          <a href="">
            <TelegramIcon />
          </a>
        </AnimatedListItem>
        <AnimatedListItem animate={animation} className="contact-method">
          <a href="">
            <FacebookIcon />
          </a>
        </AnimatedListItem>
      </ul>
      <p className="danger">Report an issue.</p>
      <h4>TriPlanner&trade;</h4>
    </footer>
  );
}
