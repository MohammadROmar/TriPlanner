import "./Service.css";

export default function Service({ service }) {
  const { image, title, description } = service;
  return (
    <li key={title} className="service">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
