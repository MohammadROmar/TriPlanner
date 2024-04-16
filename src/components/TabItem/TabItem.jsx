import "./TabItem.css";

export default function TabItem({ tab }) {
  return (
    <li className="side-bar__item">
      <button>
        <tab.icon />
        <p>{tab.title}</p>
      </button>
    </li>
  );
}
