import "./StartItem.css";

export default function StartItem({ service }) {
  const { image, title, describtion } = service;

  return (
    <li className="service">
      <div style={{ backgroundImage: `url(${image})` }}>
        <h2>{title}</h2>
        <p>{describtion}</p>
      </div>
    </li>
  );
}
