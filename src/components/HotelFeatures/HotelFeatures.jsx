import "./HotelFeatures.css";

export default function HotelFeatures() {
  return (
    <fieldset className="hotel-features">
      <legend>Features</legend>
      <div className="hotel-feature">
        <input type="checkbox" id="cafe" name="feature" value="cafe" />
        <label htmlFor="cafe">Cafe</label>
      </div>

      <div className="hotel-feature">
        <input type="checkbox" id="pool" name="feature" value="pool" />
        <label htmlFor="pool">Pool</label>
      </div>

      <div className="hotel-feature">
        <input
          name="feature"
          id="restaurant"
          type="checkbox"
          value="restaurant"
        />
        <label htmlFor="restaurant">Restaurant</label>
      </div>
    </fieldset>
  );
}
