import { useRef } from "react";
import { useLocation } from "react-router-dom";

import Modal from "../../components/UI/Modal/Modal.jsx";
import LocationIcon from "../../assets/icons/Location.jsx";
import hotelImg from "../../assets/images/hotel_room.jpg";
import "./Details.css";
import RatingBar from "../../components/RatingBar/RatingBar.jsx";

// export default function DetailsPage({ service }) {
export default function DetailsPage() {
  const dialog = useRef();
  const location = useLocation();
  const service = location.state.service;
  const subService = location.state.subService;

  function confirmDeletion() {}

  function handleDelete() {
    dialog.current.open();
  }

  function handleEdit() {}

  return (
    <>
      <Modal
        ref={dialog}
        isAlert
        title="Confirm Deleting"
        onConfirm={confirmDeletion}
      >
        <p>Are you sure you want to delete this service?</p>
        <p>This action cannot be undone.</p>
      </Modal>
      <div className="details-page">
        <div
          className="details-image"
          style={{
            background: `url(${hotelImg}) center /cover no-repeat border-box`,
          }}
        />
        <div className="details">
          <div>
            <h2 className="details__name heading">{service.name}</h2>
            <div className="details_title">
              <div className="details-location">
                <LocationIcon />
                <p>{service.address}</p>
              </div>
              <p>
                {service.cost} <span>S.P</span>
              </p>
            </div>
            <div className="details-rating">
              <RatingBar rating={4.5} />
            </div>
            <h3 className="details-description heading">Description</h3>
            <p>{service.description}</p>
          </div>
          <div className="details-actions">
            <button className="details__delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="details__edit" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
