import { v4 } from "uuid";
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
    const tooltipKeys = payload.map((tip) => <Tip key={v4()} tip={tip} />);

    return (
      <div className="tooltip">
        <p className="tooltip-label">{label}</p>
        {tooltipKeys}
      </div>
    );
  }
}
