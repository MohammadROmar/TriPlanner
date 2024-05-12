import { capitalizeFirstLetter } from "../../../util/capitalizeFirstLetter.js";
import "./Tooltip.css";

function Tip({ tip }) {
  return (
    <p style={{ color: tip.color ?? tip.payload.fill ?? tip.payload.stroke }}>
      {capitalizeFirstLetter(tip.name)}: <span>{tip.value}</span>
    </p>
  );
}

export default function Tooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const tooltipKeys = payload.map(tip => <Tip key={tip} tip={tip} />);

    return (
      <div className="tooltip">
        <p className="tooltip-label">{label}</p>
        {tooltipKeys}
      </div>
    );
  }
}
