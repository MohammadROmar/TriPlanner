import { Outlet } from "react-router-dom";

import "./Grid.css";

export default function GridPage() {
  return (
    <div id="grid-page">
      <Outlet />
    </div>
  );
}
