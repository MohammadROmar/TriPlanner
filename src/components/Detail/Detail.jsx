import "./Detail.css";

export default function Detail({ detail, value }) {
  return (
    <p className="detail-text">
      <span className="light">{detail}</span>
      <span className="normal">{value}</span>
    </p>
  );
}
