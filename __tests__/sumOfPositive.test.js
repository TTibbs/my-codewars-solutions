const positiveSum = require("../sumOfPositive");

describe("positiveSum", () => {
  test("should return 0 when input is an empty array", () => {
    const input = positiveSum([]);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return 0 when input is an array with one negative number", () => {
    const input = positiveSum([-1]);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return 10 when input is an array with one positive number", () => {
    const input = positiveSum([10]);
    const expectedResult = 10;
    expect(input).toBe(expectedResult);
  });
  test("should return the correct number when input is an array with multiple numbers", () => {
    const input = positiveSum([1, 2, 3, 4, 5]);
    const expectedResult = 15;
    expect(input).toBe(expectedResult);
  });
});
