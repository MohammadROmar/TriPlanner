import NewMonthlyUsers from "../../components/NewMonthlyUsers.jsx";
import MonthlyIncome from "../../components/MonthlyIncome.jsx";

import UsersCount from "../../components/UsersCount/UsersCount.jsx";
import TotalGovernoratesEarnings from "../../components/TotalGovernoratesEarnings.jsx";

import "./Statistics.css";

export default function StatisticsPage() {
  return (
    <div id="dashboard">
      <section id="new-users">
        <p id="customers-heading">Total Useres:</p>
        <UsersCount />
      </section>
      <section id="statistics">
        <div className="container">
          <div className="inner-container">
            <p>Past three months earnings</p>
            <TotalGovernoratesEarnings />
            {/* <BarChart data={statistics} colors={chartColors} /> */}
          </div>
          <div className="inner-container">
            <p>New Users For the past months</p>
            <NewMonthlyUsers />
          </div>
        </div>
        <div className="last-container">
          <p>Services Income</p>
          <MonthlyIncome />
        </div>
      </section>
    </div>
  );
}
