import PictureIcon from "../../assets/icons/Picture.jsx";

import "./ImageSelector.css";

export default function ImageSelector({ value, onChange }) {
  function handleImageChange(event) {
    const image = event.target.files[0];

    if (image) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);

      fileReader.onloadend = () => {
        onChange(fileReader.result);
      };
    }
  }

  return (
    <fieldset
      className="select-image-container"
      style={value && { backgroundImage: `url(${value})` }}
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
