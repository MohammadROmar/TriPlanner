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
    const pastThreeMonthsUsers = [
      {
        name: `${secondPrevMonth.month}/${secondPrevMonth.year}`,
      },
      {
        name: `${prevMonth.month}/${prevMonth.year}`,
      },
      {
        name: `${currMonth.month}/${currMonth.year}`,
      },
    ];

    for (const userType of secoundPrevMonthData) {
      pastThreeMonthsUsers[0][userType.typeName] = userType.numberOfType;
    }

    for (const userType of prevMonthData) {
      pastThreeMonthsUsers[1][userType.typeName] = userType.numberOfType;
    }

    for (const userType of curruntMonthData) {
      pastThreeMonthsUsers[2][userType.typeName] = userType.numberOfType;
    }

    return <BarChart data={pastThreeMonthsUsers} colors={chartColors} />;
  }
}
