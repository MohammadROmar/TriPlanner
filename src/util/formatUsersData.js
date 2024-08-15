import { currMonth, prevMonth, secondPrevMonth } from "./getPrevMonths.js";

export function formatUsersData(
  curruntMonthUsers,
  prevMonthUsers,
  secondPrevMonthUsers
) {
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

  for (const userType of secondPrevMonthUsers) {
    pastThreeMonthsUsers[0][userType.typeName] = userType.numberOfType;
  }

  for (const userType of prevMonthUsers) {
    pastThreeMonthsUsers[1][userType.typeName] = userType.numberOfType;
  }

  for (const userType of curruntMonthUsers) {
    pastThreeMonthsUsers[2][userType.typeName] = userType.numberOfType;
  }

  return pastThreeMonthsUsers;
}
