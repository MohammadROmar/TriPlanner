import { PieChart, Pie, Cell } from "recharts";

import Chart from "./Chart.jsx";
import { chartColors } from "../../data/colors.js";

export default function CustomPieChart({ data }) {
  return (
    <Chart ChartType={PieChart} data={data}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        label
      >
        {data.map((intry, index) => (
          <Cell
            key={"cell" + index}
            fill={chartColors[index % 5].stroke}
            stroke={chartColors[index % 5].fill}
          />
        ))}
      </Pie>
    </Chart>
  );
}
