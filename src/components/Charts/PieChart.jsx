import { PieChart, Pie, Cell } from "recharts";

import Chart from "./Chart.jsx";
import { chartColors } from "../../data/colors.js";
import { data0 } from "../../data/dummy_data.js";

export default function CustomPieChart({ data }) {
  return (
    <Chart ChartType={PieChart} data={data0}>
      <Pie
        data={data0}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        label
      >
        {data0.map((intry, index) => (
          <Cell
            key={"cell" + index}
            fill={chartColors[index].stroke}
            stroke={chartColors[index].fill}
          />
        ))}
      </Pie>
    </Chart>
  );
}
