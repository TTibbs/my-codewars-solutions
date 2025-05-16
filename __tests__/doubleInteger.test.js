const doubleInteger = require("../fundamentals/numbers/doubleInteger");

describe("doubleInteger", () => {
  test("should return 0 when input is 0", () => {
    const input = doubleInteger(0);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return 2 when input is 1", () => {
    const input = doubleInteger(1);
    const expectedResult = 2;
    expect(input).toBe(expectedResult);
  });
  test("should return 4 when input is 2", () => {
    const input = doubleInteger(2);
    const expectedResult = 4;
    expect(input).toBe(expectedResult);
  });
  test("should return 6 when input is 3", () => {
    const input = doubleInteger(3);
    const expectedResult = 6;
    expect(input).toBe(expectedResult);
  });
  test("should return 8 when input is 4", () => {
    const input = doubleInteger(4);
    const expectedResult = 8;
    expect(input).toBe(expectedResult);
  });
  test("should return 10 when input is 5", () => {
    const input = doubleInteger(5);
    const expectedResult = 10;
    expect(input).toBe(expectedResult);
  });
  test("should return 12 when input is 6", () => {
    const input = doubleInteger(6);
    const expectedResult = 12;
    expect(input).toBe(expectedResult);
  });
  test("should return 14 when input is 7", () => {
    const input = doubleInteger(7);
    const expectedResult = 14;
    expect(input).toBe(expectedResult);
  });
  test("should return 16 when input is 8", () => {
    const input = doubleInteger(8);
    const expectedResult = 16;
    expect(input).toBe(expectedResult);
  });
  test("should return 18 when input is 9", () => {
    const input = doubleInteger(9);
    const expectedResult = 18;
    expect(input).toBe(expectedResult);
  });
  test("should return 20 when input is 10", () => {
    const input = doubleInteger(10);
    const expectedResult = 20;
    expect(input).toBe(expectedResult);
  });
  test("should return 77778 when input is 38889", () => {
    const input = doubleInteger(38889);
    const expectedResult = 77778;
    expect(input).toBe(expectedResult);
  });
});
