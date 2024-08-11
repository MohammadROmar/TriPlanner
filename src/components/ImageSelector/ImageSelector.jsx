import { useState } from "react";

import PictureIcon from "../../assets/icons/Picture.jsx";

import "./ImageSelector.css";

export default function ImageSelector() {
  const [image, setImage] = useState();

  function handleImageChange(event) {
    const image = event.target.files[0];

    if (image) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);

      fileReader.onloadend = () => {
        setImage(fileReader.result);
      };
    }
  }

  return (
    <fieldset
      className="select-image-container"
      style={image && { backgroundImage: `url(${image})` }}
    >
      <legend>Image</legend>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label htmlFor="image">
        <PictureIcon />
      </label>
    </fieldset>
  );
}
