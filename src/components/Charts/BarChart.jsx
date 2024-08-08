import { v4 } from "uuid";
import { BarChart, Bar } from "recharts";

import Chart from "./Chart.jsx";

export default function CustomBarChart({ data, colors }) {
  const keys = Object.keys(data[0]).map((key) => key);
  const bars = keys.map((bar, index) => {
    if (bar !== "name") {
      return (
        <Bar
          key={v4()}
          dataKey={bar}
          fill={colors[(index - 1) % 5].stroke}
          floodColor={"red"}
        />
      );
    }
  });

  return (
    <Chart ChartType={BarChart} data={data} hasAxis>
      {bars}
    </Chart>
  );
}
