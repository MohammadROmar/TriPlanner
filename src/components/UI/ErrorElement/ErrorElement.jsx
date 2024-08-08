import somethingWentWrongImg from "../../../assets/images/somethingWentWrong.png";

import "./ErrorElement.css";

export default function ErrorElement({ title, message }) {
  return (
    <div className="error-element">
      <img src={somethingWentWrongImg} alt="" style={{ width: "15rem" }} />
      <h2 className="error-element-title">{title || "Something went wrong!"}</h2>
      <p className="error-element-message">
        {message || "Please check your connection and try again."}
      </p>
    </div>
  );
}
