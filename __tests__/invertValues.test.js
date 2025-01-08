const invert = require("../invertValues");

describe("invert", () => {
  test("should return an empty array when input is an empty array", () => {
    const input = invert([]);
    const expectedResult = [];
    expect(input).toEqual(expectedResult);
  });
  test("should return an array with one element when input is an array with one element", () => {
    const input = invert([1]);
    const expectedResult = [-1];
    expect(input).toEqual(expectedResult);
  });
  test("should return an array with one element when input is an array with two elements", () => {
    const input = invert([1, 2]);
    const expectedResult = [-1, -2];
    expect(input).toEqual(expectedResult);
  });
  test("should invert the values of the array", () => {
    const input = invert([1, 2, 3, 4, 5]);
    const expectedResult = [-1, -2, -3, -4, -5];
    expect(input).toEqual(expectedResult);
  });
});
