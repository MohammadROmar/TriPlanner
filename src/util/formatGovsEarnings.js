import { currMonth, prevMonth, secondPrevMonth } from "./getPrevMonths.js";

export function formatGovsEarnings(
  currMonthData,
  prevMonthData,
  secPrevMonthData
) {
  const pastThreeMonthsEarnings = [
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

  for (const data of secPrevMonthData) {
    pastThreeMonthsEarnings[0][data.name] = data.totalEarnings;
  }

  for (const data of prevMonthData) {
    pastThreeMonthsEarnings[1][data.name] = data.totalEarnings;
  }

  for (const data of currMonthData) {
    pastThreeMonthsEarnings[2][data.name] = data.totalEarnings;
  }

  return pastThreeMonthsEarnings;
}
