import { useQuery } from "@tanstack/react-query";

import BarChart from "./Charts/BarChart.jsx";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner.jsx";

import {
  currMonth,
  prevMonth,
  secondPrevMonth,
} from "../util/getPrevMonths.js";
import { chartColors } from "../data/colors";
import { get } from "../util/http/methods/get";
import { formatUsersData } from "../util/formatUsersData.js";

export default function NewMonthlyUsers() {
  const {
    data: curruntMonthData,
    isLoading: curruntMonthIsLoading,
    isError: curruntMonthHasError,
  } = useQuery({
    queryKey: ["users", { month: currMonth.month, year: currMonth.year }],
    queryFn: () =>
      get(`Account/report/NumOfUsers/${currMonth.month}/${currMonth.year}`),
  });

  const {
    data: prevMonthData,
    isLoading: prevMonthIsLoading,
    isError: prevMonthHasError,
  } = useQuery({
    queryKey: ["users", { month: prevMonth.month, year: prevMonth.year }],
    queryFn: () =>
      get(`Account/report/NumOfUsers/${prevMonth.month}/${prevMonth.year}`),
  });

  const {
    data: secoundPrevMonthData,
    isLoading: secondPrevMonthIsLoading,
    isError: secondPrevMonthHasError,
  } = useQuery({
    queryKey: [
      "users",
      { month: secondPrevMonth.month, year: secondPrevMonth.year },
    ],
    queryFn: () =>
      get(
        `Account/report/NumOfUsers/${secondPrevMonth.month}/${secondPrevMonth.year}`
      ),
  });

  if (curruntMonthIsLoading || prevMonthIsLoading || secondPrevMonthIsLoading) {
    return <LoadingSpinner />;
  }

  if (curruntMonthHasError || prevMonthHasError || secondPrevMonthHasError) {
    return (
      <p style={{ color: "var(--color-danger)", margin: "0.25rem" }}>
        Couldn't fetch data about users.
      </p>
    );
  }
  if (curruntMonthData && prevMonthData && secoundPrevMonthData) {
    const pastThreeMonthsUsers = formatUsersData(
      curruntMonthData,
      prevMonthData,
      secoundPrevMonthData
    );

    return <BarChart data={pastThreeMonthsUsers} colors={chartColors} />;
  }
}
