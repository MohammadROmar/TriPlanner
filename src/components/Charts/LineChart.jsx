import { LineChart, Line } from "recharts";

import Chart from "./Chart.jsx";

export default function CustomLineChart({ data, colors }) {
  const keys = Object.keys(data[0]).map((key) => key);
  const lines = keys.map((line, index) => {
    if (line !== "name") {
      return (
        <Line
          key={"line" + line}
          type="monotone"
          dataKey={line}
          stroke={colors[index - 1].stroke}
        />
      );
    }
  });

  return (
    <Chart ChartType={LineChart} data={data} hasAxis>
      {lines}
    </Chart>
  );
}
