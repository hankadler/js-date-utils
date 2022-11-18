export const resetClock = (date) => {
  const _date = date instanceof Date ? date : new Date(date);
  _date.setUTCMilliseconds(0);
  _date.setUTCSeconds(0);
  _date.setUTCMinutes(0);
  _date.setUTCHours(0);
  return _date;
};

// todo:
// - milliseconds
// - seconds
// - minutes
// - hours

export const getDayStart = (date) => {
  const dayStart = new Date(date);
  return resetClock(dayStart);
};

export const getDayEnd = (date) => {
  const dayStart = getDayStart(date);
  const dayEnd = new Date(
    dayStart.getUTCFullYear(),
    dayStart.getUTCMonth(),
    dayStart.getUTCDate() + 1
  );
  return resetClock(dayEnd);
};

export const getMonthStart = (date) => {
  const _date = date instanceof Date ? date : new Date(date);
  const monthStart = new Date(_date.getUTCFullYear(), _date.getUTCMonth(), 1);
  return resetClock(monthStart);
};

export const getMonthEnd = (date) => {
  const monthStart = getMonthStart(date);
  const monthEnd = new Date(monthStart.getUTCFullYear(), monthStart.getUTCMonth() + 1, 1);
  return resetClock(monthEnd);
};

export const getYearStart = (date) => {
  const _date = date instanceof Date ? date : new Date(date);
  const yearStart = new Date(_date.getUTCFullYear(), 0, 1);
  return resetClock(yearStart);
};

export const getYearEnd = (date) => {
  const yearStart = getYearStart(date);
  const yearEnd = new Date(yearStart.getUTCFullYear() + 1, 0, 1);
  return resetClock(yearEnd);
};
