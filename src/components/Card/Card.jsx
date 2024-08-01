import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ to, background, children, ...props }) {
  return (
    <Link to={to} className="card" {...props}>
      <div
        className="card-content"
        style={{
          background: `
            linear-gradient(
              to top, rgba(0, 0, 0, 1),
              transparent 60%
            ), ${background}`,
        }}
      >
        {children}
      </div>
    </Link>
  );
}
