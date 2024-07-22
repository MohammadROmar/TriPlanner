import "./ContactMethods.css";

export default function ContactMethods({ service }) {
  return (
    <div className="details-contact">
      <h5 className="heading">Contact</h5>
      <p>
        Email Address:{" "}
        <span className="detail__light">{service.contactEmail}</span>.
      </p>
      <p>
        Email Number:{" "}
        <span className="detail__light">{service.contactNumber}.</span>
      </p>
    </div>
  );
}
