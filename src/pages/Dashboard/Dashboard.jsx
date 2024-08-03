import AreaChart from "../../components/Charts/AreaChart.jsx";
import BarChart from "../../components/Charts/BarChart.jsx";
import LineChart from "../../components/Charts/LineChart.jsx";
import UsersCount from "../../components/UsersCount/UsersCount.jsx";

import { statistics } from "../../data/dummy_data.js";
import { chartColors } from "../../data/colors.js";

import "./Dashboard.css";

export default function DashboardPage() {
  return (
    <div id="dashboard">
      <section id="new-users">
        <p id="customers-heading">Total Useres:</p>
        <UsersCount />
      </section>
      <section id="statistics">
        <div className="container">
          <div className="inner-container">
            <p>Some statistics</p>
            <AreaChart data={statistics} colors={chartColors} />
          </div>
          <div className="inner-container">
            <p>Top 5 States</p>
            <BarChart data={statistics} colors={chartColors} />
          </div>
        </div>
        <div className="last-container">
          <p>Other statistics</p>
          <LineChart data={statistics} colors={chartColors} />
        </div>
      </section>
    </div>
  );
}
