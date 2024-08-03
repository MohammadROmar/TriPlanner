import { v4 } from "uuid";
import { AreaChart, Area } from "recharts";

import Chart from "./Chart.jsx";

export default function CustomAreaChart({ data, colors }) {
  const keys = Object.keys(data[0]).map((key) => key);
  const areas = keys.map((area, index) => {
    if (area !== "name") {
      return (
        <Area
          key={v4()}
          type="monotone"
          dataKey={area}
          stroke={colors[index - 1].stroke}
          fill={colors[index - 1].fill}
          stackId="1"
        />
      );
    }
  });

  return (
    <Chart ChartType={AreaChart} data={data} hasAxis>
      {areas}
    </Chart>
  );
}
