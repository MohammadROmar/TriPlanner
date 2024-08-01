import Category from "../Gategory/Gategory.jsx";

import "./Description.css";

export default function Description({ service, subservice, stId }) {
  return (
    <div className="details-description">
      <h3 className="details-description heading">Description</h3>
      <p>{service.description}</p>
      {stId < 3 && <Category stId={stId} />}
      {subservice.numberOfPeople && (
        <p>
          Number of People:{" "}
          <span className="detail__light">{subservice.numberOfPeople}.</span>
        </p>
      )}
    </div>
  );
}
