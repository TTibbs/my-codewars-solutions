const isToday = (date) => {
  let a = new Date();
  date.setHours(0, 0, 0, 0);
  a.setHours(0, 0, 0, 0);
  return date.getTime() === a.getTime();
};

module.exports = isToday;
