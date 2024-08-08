import { useState } from "react";

import Input from "../Input/Input.jsx";
import Actions from "../NewServiceActions.jsx";
import Modal from "../UI/OpenedModal/OpenedModal.jsx";
import Governorates from "../GovernorateSelector.jsx";
import HotelFeatures from "../HotelFeatures/HotelFeatures.jsx";
import ImageSelector from "../ImageSelector/ImageSelector.jsx";

import UserIcon from "../../assets/icons/User.jsx";
import EmailIcon from "../../assets/icons/Email.jsx";
import MobileIcon from "../../assets/icons/Mobile.jsx";
import AddressIcon from "../../assets/icons/Address.jsx";
import DescriptionIcon from "../../assets/icons/Description.jsx";

import { validateServiceInput } from "../../util/validation.js";

import "./NewService.css";

export default function NewService() {
  const [selectedImage, setSelectedImage] = useState();
  const [hasInputError, setHasInputError] = useState(false);
  const [selectedGovernorate, setSelectedGovernorate] = useState("");

  function handleFormSubmittion(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const features = formData.getAll("feature");

    if (
      validateServiceInput(data) ||
      selectedImage === undefined ||
      selectedGovernorate === "" ||
      selectedGovernorate === undefined
    ) {
      setHasInputError(true);
    } else {
      if (hasInputError) {
        hasInputError(false);
      }
    }
  }

  return (
    <Modal title="Create Service">
      <form onSubmit={handleFormSubmittion}>
        <Input name="name" type="text" icon={UserIcon} />
        <Input name="address" type="text" icon={AddressIcon} />
        <Input name="description" type="text" icon={DescriptionIcon} />
        <Input name="contact-email" type="email" icon={EmailIcon} />
        <Input name="contact-number" type="number" icon={MobileIcon} />
        <Governorates
          value={selectedGovernorate}
          onChange={setSelectedGovernorate}
        />
        <div className="row">
          <ImageSelector value={selectedImage} onChange={setSelectedImage} />
          <HotelFeatures />
        </div>
        <Actions hasInputError={hasInputError} />
      </form>
    </Modal>
  );
}
