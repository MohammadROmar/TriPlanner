import { useSelector } from "react-redux";

import Category from "../Gategory/Gategory.jsx";
import Detail from "../../../components/Detail/Detail.jsx";

import "./Description.css";

export default function Description() {
  const subservice = useSelector((state) => state.service.subservice);
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  return (
    <div className="details-description">
      <h3 className="details-description heading">Description</h3>
      <p>{subservice.description}</p>
      {serviceTypeId < 3 && <Category />}
      {subservice.numberOfPeople && (
        <Detail detail="Number of People: " value={subservice.numberOfPeople} />
      )}
      {subservice.quantity && (
        <Detail detail="Availabe: " value={subservice.quantity} />
      )}
      {subservice.days && <Detail detail="Days: " value={subservice.days} />}
    </div>
  );
}
