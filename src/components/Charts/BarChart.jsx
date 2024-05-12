import { BarChart, Bar } from "recharts";

import Chart from "./Chart.jsx";

export default function CustomBarChart({ data, colors }) {
  const keys = Object.keys(data[0]).map(key => key);
  const bars = keys.map((bar, index) => {
    if (bar !== "name") {
      return (
        <Bar key={"bar" + bar} dataKey={bar} fill={colors[index - 1].fill} />
      );
    }
  });

  return (
    <Chart ChartType={BarChart} data={data} hasAxis>
      {bars}
    </Chart>
  );
}
