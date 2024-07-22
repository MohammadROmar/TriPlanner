import Star from "../../assets/icons/Star";
import HalfStar from "../../assets/icons/HalfStar";

import "./RatingBar.css";

export default function RatingBar({ rating }) {
  const rate = rating;
  const stars = [];

  for (let i = 0; i < 5; i++, rating--) {
    if (rating >= 1) {
      stars.push(<Star isCompleted />);
    } else if (rating >= 0.5 && rating < 1) {
      stars.push(<HalfStar />);
    } else {
      stars.push(<Star />);
    }
  }

  return (
    <div className="rating-bar">
      <div className="stars">{...stars}</div>
      <p>|</p>
      <p>
        {rate} Star{rate > 1 ? "s" : ""}
      </p>
    </div>
  );
}
