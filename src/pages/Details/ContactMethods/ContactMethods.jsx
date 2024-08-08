import { useSelector } from "react-redux";

import Detail from "../../../components/Detail/Detail.jsx";

import "./ContactMethods.css";

export default function ContactMethods() {
  const service = useSelector(state => state.service.service);

  return (
    <div className="details-contact">
      <h5 className="heading">Contact</h5>
      <Detail detail="Email Address: " value={service.contactEmail} />
      <Detail detail="Mobile Number: " value={service.contactNumber} />
    </div>
  );
}
