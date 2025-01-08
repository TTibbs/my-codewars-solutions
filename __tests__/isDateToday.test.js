const isToday = require("../isDateToday");

describe("isToday", () => {
  test("should return true when the date is today", () => {
    const date = new Date();
    const input = isToday(date);
    const expectedResult = true;
    expect(input).toBe(expectedResult);
  });
});
