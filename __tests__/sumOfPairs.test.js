const sumPairs = require("../sumOfPairs");

describe("sumPairs", () => {
  test("should return the first two values that add up to the sum", () => {
    expect(sumPairs([11, 3, 7, 5], 10)).toEqual([3, 7]);
  });
  test("should return the first two values that add up to the sum", () => {
    expect(sumPairs([11, 32, 68, 44, 56, 8, 21], 100)).toEqual([32, 68]);
  });
});
