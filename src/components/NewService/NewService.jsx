import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import Input from "../Input/Input.jsx";
import Actions from "../NewServiceActions.jsx";
import Governorates from "../GovernorateSelector.jsx";
import Modal from "../UI/OpenedModal/OpenedModal.jsx";
import ErrorBlock from "../UI/ErrorBlock/ErrorBlock.jsx";
import HotelFeatures from "../HotelFeatures/HotelFeatures.jsx";
import ImageSelector from "../ImageSelector/ImageSelector.jsx";

import UserIcon from "../../assets/icons/User.jsx";
import EmailIcon from "../../assets/icons/Email.jsx";
import MobileIcon from "../../assets/icons/Mobile.jsx";
import AddressIcon from "../../assets/icons/Address.jsx";
import DescriptionIcon from "../../assets/icons/Description.jsx";

import { clear } from "../../store/slices/owner.js";
import { showSnackbar } from "../../store/slices/snackbar.js";
import { validateServiceInput } from "../../util/validation.js";
import { createService } from "../../util/http/methods/post/createService.js";

import "./NewService.css";

export default function NewService() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const ownerId = useSelector((state) => state.owner.id);
  const ownerRole = useSelector((state) => state.owner.role);

  const [hasInputError, setHasInputError] = useState(false);
  const [selectedGovernorate, setSelectedGovernorate] = useState("");

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      navigate("../");
      dispatch(clear());
      dispatch(showSnackbar({ message: "Service Created Successfully" }));
    },
  });

  async function handleFormSubmittion(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const features = formData.getAll("feature");

    if (
      data.image.size === 0 ||
      selectedGovernorate === "" ||
      !validateServiceInput(data)
    ) {
      setHasInputError(true);
    } else {
      if (hasInputError) {
        setHasInputError(false);
      }

      const requestData = {
        ...data,
        ownerId,
        features,
        ownerRole,
        governorate: selectedGovernorate,
      };

      mutate({ data: requestData });
    }
  }

  return (
    <Modal title="Create Service">
      {!ownerId || !ownerRole ? (
        <div className="no-owner">
          <ErrorBlock title="A service Owner must be created at first!" />
          <button onClick={() => navigate("../")}>Close</button>
        </div>
      ) : (
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
            <ImageSelector />
            <HotelFeatures />
          </div>
          {isPending && <p className="submit-service">Submitting...</p>}
          {!isPending && (
            <Actions hasInputError={hasInputError} hasSubmitError={isError} />
          )}
        </form>
      )}
    </Modal>
  );
}
