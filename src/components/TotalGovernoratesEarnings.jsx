import { useQuery } from "@tanstack/react-query";

import LineChart from "./Charts/LineChart.jsx";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner.jsx";

import {
  currMonth,
  prevMonth,
  secondPrevMonth,
} from "../util/getPrevMonths.js";
import { get } from "../util/http/methods/get.js";
import { areaChartColore } from "../data/colors.js";
import { formatGovsEarnings } from "../util/formatGovsEarnings.js";

export default function TotalGovernoratesEarnings() {
  const {
    data: currMonthData,
    isLoading: currMonthIsLoading,
    isError: currMonthIsError,
  } = useQuery({
    queryKey: ["governorates earnings", currMonth.month],
    queryFn: () =>
      get(
        `earnings/allGovEarnings?month=${currMonth.month}&year=${currMonth.year}`
      ),
  });

  const {
    data: prevMonthData,
    isLoading: prevMonthIsLoading,
    isError: prevMonthIsError,
  } = useQuery({
    queryKey: ["governorates earnings", prevMonth.month],
    queryFn: () =>
      get(
        `earnings/allGovEarnings?month=${prevMonth.month}&year=${prevMonth.year}`
      ),
  });

  const {
    data: secPrevMonthData,
    isLoading: secPrevMonthIsLoading,
    isError: secPrevMonthIsError,
  } = useQuery({
    queryKey: ["governorates earnings", secondPrevMonth.month],
    queryFn: () =>
      get(
        `earnings/allGovEarnings?month=${secondPrevMonth.month}&year=${secondPrevMonth.year}`
      ),
  });

  if (secPrevMonthIsLoading || prevMonthIsLoading || currMonthIsLoading) {
    return <LoadingSpinner />;
  }

  if (secPrevMonthIsError || prevMonthIsError || currMonthIsError) {
    return (
      <p style={{ color: "var(--color-danger)", margin: "0.25rem" }}>
        Couldn't fetch governorates earnings.
      </p>
    );
  }

  if (currMonthData && prevMonthData && secPrevMonthData) {
    const pastThreeMonthsEarnings = formatGovsEarnings(
      currMonthData,
      prevMonthData,
      secPrevMonthData
    );

    return (
      <LineChart data={pastThreeMonthsEarnings} colors={areaChartColore} />
    );
  }
}
