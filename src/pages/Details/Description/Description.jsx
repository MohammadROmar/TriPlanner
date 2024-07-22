import "./Description.css";

export default function Description({ service, subservice }) {
  return (
    <div className="details-description">
      <h3 className="details-description heading">Description</h3>
      <p>{service.description}</p>
      <p>
        Category:{" "}
        <span className="detail__light">
          {subservice.category === 1
            ? "First "
            : subservice.category === 2
            ? "Second "
            : "Third "}
          Class
        </span>
        .
      </p>
      {subservice.numberOfPeople && (
        <p>
          Number of People:{" "}
          <span className="detail__light">{subservice.numberOfPeople}.</span>
        </p>
      )}
    </div>
  );
}
