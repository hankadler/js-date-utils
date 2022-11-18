import {
  getDayStart,
  getDayEnd,
  getMonthStart,
  getMonthEnd,
  getYearStart,
  getYearEnd
} from "../src";

const dates = [
  "2022-01",
  new Date("2022-01"),
  "2022-06-01",
  new Date("2022-06-01"),
  "2022-11-15T04:12:15.000Z",
  new Date("2022-11-15T04:12:15.000Z")
];

// check day calculations
dates.forEach((date) => console.log({
  date,
  dayStart: getDayStart(date),
  dayEnd: getDayEnd(date)
}));

// check month calculations
dates.forEach((date) => console.log({
  date,
  monthStart: getMonthStart(date),
  monthEnd: getMonthEnd(date)
}));

// check year calculations
dates.forEach((date) => console.log({
  date,
  yearStart: getYearStart(date),
  yearEnd: getYearEnd(date)
}));
