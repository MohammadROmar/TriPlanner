function getPrevMonth(month, year) {
  if (month - 1 === 0) {
    return {
      month: 12,
      year: year - 1,
    };
  }

  return {
    month: month - 1,
    year,
  };
}

const date = new Date();

const currMonth = {};
currMonth.month = date.getMonth() + 1;
currMonth.year = date.getFullYear();

const prevMonth = getPrevMonth(currMonth.month, currMonth.year);
const secondPrevMonth = getPrevMonth(prevMonth.month, prevMonth.year);

export { currMonth, prevMonth, secondPrevMonth };
