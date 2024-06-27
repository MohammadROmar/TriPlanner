import { v4 } from "uuid";

import AreaChart from "../../components/Charts/AreaChart.jsx";
import BarChart from "../../components/Charts/BarChart.jsx";
import LineChart from "../../components/Charts/LineChart.jsx";
import { statistics, newCustomers } from "../../data/dummy_data.js";
import { cardColors, chartColors } from "../../data/colors.js";
import "./Dashboard.css";

function Card({ customer, colors }) {
  const { type, number, Icon } = customer;
  const { color, background } = colors;

  return (
    <li className="customer" style={{ background }}>
      <div className="container" style={{ background: color }}>
        <Icon stroke={background} />
      </div>
      <div>
        <p className="customer-type" style={{ color }}>
          {type}
        </p>
        <p className="customer-numbers" style={{ color }}>
          {number}
        </p>
      </div>
    </li>
  );
}

export default function DashboardPage() {
  const customers = newCustomers.map((customer, index) => (
    <Card key={customer.type} customer={customer} colors={cardColors[index]} />
  ));

  return (
    <div id="dashboard">
      <section id="new-users">
        <p id="customers-heading">New Users For This Month:</p>
        <ul id="new-customers">{customers}</ul>
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
