const sum = require("../fundamentals/arrays/sumArrays");

describe("sum", () => {
  test("should return 0 when input is an empty array", () => {
    const input = sum([]);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return the sum of the elements in the array", () => {
    const input = sum([1, 2, 3, 4, 5]);
    const expectedResult = 15;
    expect(input).toBe(expectedResult);
  });
  test("should return the sum of elements in the array when the array contains negative numbers", () => {
    const input = sum([1, -2, 3, -4, 5]);
    const expectedResult = 3;
    expect(input).toBe(expectedResult);
  });
});
