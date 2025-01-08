const highAndLow = require("../highestAndLowest");

describe("highAndLow", () => {
  test("should return the highest and lowest numbers from a given string of numbers", () => {
    const input = highAndLow("1 2");
    const expectedResult = "2 1";
    expect(input).toBe(expectedResult);
  });
  test("should return the highest and lowest numbers from a given string of numbers", () => {
    const input = highAndLow("1 2 3 4 5 9 20 34 6 100 8");
    const expectedResult = "100 1";
    expect(input).toBe(expectedResult);
  });
});
