import { useMonthlyIncome } from "../hooks/useMonthlyIncome.js";

import BarChart from "./Charts/BarChart.jsx";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner.jsx";

import {
  currMonth,
  prevMonth,
  secondPrevMonth
} from "../util/getPrevMonths.js";
import { chartColors } from "../data/colors.js";

export default function MonthlyIncome() {
  const {
    data: currMonthData,
    isLoading: currMonthIsLoading,
    isError: currMonthHasError
  } = useMonthlyIncome({
    month: currMonth.month,
    year: currMonth.year
  });

  const {
    data: prevMonthData,
    isLoading: prevMonthIsLoading,
    isError: prevMonthHasError
  } = useMonthlyIncome({
    month: prevMonth.month,
    year: prevMonth.year
  });

  const {
    data: secondPrevMonthData,
    isLoading: secondPrevMonthIsLoading,
    isError: secondPrevMonthHasError
  } = useMonthlyIncome({
    month: secondPrevMonth.month,
    year: secondPrevMonth.year
  });

  const pastThreeMonthsIncome = [
    {
      name: `${secondPrevMonth.month}/${secondPrevMonth.year}`
    },
    {
      name: `${prevMonth.month}/${prevMonth.year}`
    },
    {
      name: `${currMonth.month}/${currMonth.year}`
    }
  ];

  if (currMonthIsLoading || prevMonthIsLoading || secondPrevMonthIsLoading) {
    return <LoadingSpinner />;
  }

  if (currMonthIsLoading || prevMonthHasError || secondPrevMonthHasError) {
    return (
      <p style={{ color: "var(--color-danger)", margin: "0.25rem" }}>
        Couldn't fetch data about services.
      </p>
    );
  }

  if (currMonthData && prevMonthData && secondPrevMonthData) {
    for (const monthlyIncome of secondPrevMonthData) {
      pastThreeMonthsIncome[0][`Id: ${monthlyIncome.serviceId}`] =
        monthlyIncome.earnings;
    }

    for (const monthlyIncome of prevMonthData) {
      pastThreeMonthsIncome[1][`Id: ${monthlyIncome.serviceId}`] =
        monthlyIncome.earnings;
    }

    for (const monthlyIncome of currMonthData) {
      pastThreeMonthsIncome[2][`Id: ${monthlyIncome.serviceId}`] =
        monthlyIncome.earnings;
    }

    return <BarChart data={pastThreeMonthsIncome} colors={chartColors} />;
  }
}
