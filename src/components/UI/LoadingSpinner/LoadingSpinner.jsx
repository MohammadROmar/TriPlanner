import { ColorRing } from "react-loader-spinner";

import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  const spinnerColor = "#327af0";
  const colors = Array(5).fill(spinnerColor);

  return (
    <div id="spinner">
      <ColorRing visible height="80" width="80" colors={colors} />
    </div>
  );
}
