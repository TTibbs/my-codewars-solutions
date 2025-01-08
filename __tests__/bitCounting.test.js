const countBits = require("../bitCounting");

describe("countBits", () => {
  test("should return 0 when input is 0", () => {
    const input = countBits(0);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return 1 when input is 1", () => {
    const input = countBits(1);
    const expectedResult = 1;
    expect(input).toBe(expectedResult);
  });
  test("should return 1 when input is 2", () => {
    const input = countBits(2);
    const expectedResult = 1;
    expect(input).toBe(expectedResult);
  });
  test("should return 2 when input is 3", () => {
    const input = countBits(3);
    const expectedResult = 2;
    expect(input).toBe(expectedResult);
  });
  test("should return 2 when input is 4", () => {
    const input = countBits(4);
    const expectedResult = 1;
    expect(input).toBe(expectedResult);
  });
  test("should return 3 when input is 7", () => {
    const input = countBits(7);
    const expectedResult = 3;
    expect(input).toBe(expectedResult);
  });
  test("should return 4 when input is 15", () => {
    const input = countBits(15);
    const expectedResult = 4;
    expect(input).toBe(expectedResult);
  });
  test("should return 5 when input is 31", () => {
    const input = countBits(31);
    const expectedResult = 5;
    expect(input).toBe(expectedResult);
  });
});
