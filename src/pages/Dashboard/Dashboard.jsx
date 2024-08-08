import NewMonthlyUsers from "../../components/NewMonthlyUsers.jsx";
import MonthlyIncome from "../../components/MonthlyIncome.jsx";

import AreaChart from "../../components/Charts/AreaChart.jsx";
import LineChart from "../../components/Charts/LineChart.jsx";
import UsersCount from "../../components/UsersCount/UsersCount.jsx";
import PieChart from "../../components/Charts/PieChart.jsx";

import { statistics, data0 } from "../../data/dummy_data.js";
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
            <p>New Users For the past months</p>
            <NewMonthlyUsers />
          </div>
        </div>
        <div className="last-container">
          <p>Other statistics</p>
          <MonthlyIncome />
          {/* <LineChart data={statistics} colors={chartColors} /> */}
          {/* <PieChart data={data0} /> */}
        </div>
      </section>
    </div>
  );
}
