import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from "recharts";

import CustomTooltip from "./Tooltip/Tooltip.jsx";

export default function Chart({ ChartType, data, children, hasAxis }) {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <ChartType data={data} margin={{ top: 20, right: 30, bottom: 10 }}>
        {hasAxis && (
          <>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#838383" strokeDasharray="7 7" />
          </>
        )}
        {children}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </ChartType>
    </ResponsiveContainer>
  );
}
