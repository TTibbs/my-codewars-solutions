const hexToDec = require("../hexToDecimal");

describe("Hex to Decimal", () => {
  test("Should return 1 when input is 1", () => {
    const input = hexToDec("1");
    const expectedResult = 1;
    expect(input).toBe(expectedResult);
  });
  test("Should return 10 when input is a", () => {
    const input = hexToDec("a");
    const expectedResult = 10;
    expect(input).toBe(expectedResult);
  });
  test("Should return 15 when input is f", () => {
    const input = hexToDec("f");
    const expectedResult = 15;
    expect(input).toBe(expectedResult);
  });
});
