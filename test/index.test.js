import assert from "assert";
import {
  getDayStart,
  getDayEnd,
  getMonthStart,
  getMonthEnd,
  getYearStart,
  getYearEnd
} from "../src";

const date = "2022-06-15";

it("dayEnd - DayStart = 8.64e+7 ms", () => {
  const dayStart = getDayStart(date);
  const dayEnd = getDayEnd(date);
  assert.equal(dayEnd - dayStart, 8.64e+7);
});

it("monthEnd - MonthStart = 2.592e+9 ms for June", () => {
  const monthStart = getMonthStart(date);
  const monthEnd = getMonthEnd(date);
  assert.equal(monthEnd - monthStart, 2.592e+9);
});

it("yearEnd - YearStart = 3.1536e+10 ms for non-leap year 2022", () => {
  const yearStart = getYearStart(date);
  const yearEnd = getYearEnd(date);
  assert.equal(yearEnd - yearStart, 3.1536e+10);
});
