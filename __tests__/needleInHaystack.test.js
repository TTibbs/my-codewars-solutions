const findNeedle = require("../needleInHaystack");

describe("findNeedle", () => {
  test("should return the index of the word 'needle' in the array", () => {
    const input = findNeedle(["needle"]);
    const expectedResult = "found the needle at position 0";
    expect(input).toBe(expectedResult);
  });
  test("should return the index of the word 'needle' in the array", () => {
    const input = findNeedle([
      "stack",
      "hay",
      "stack",
      "hay",
      "needle",
      "stack",
      "hay",
    ]);
    const expectedResult = "found the needle at position 4";
    expect(input).toBe(expectedResult);
  });
  test("should return the index of the word 'needle' in the array", () => {
    const input = findNeedle([
      "hay",
      "stack",
      "hay",
      "hay",
      "stack",
      "hay",
      "needle",
    ]);
    const expectedResult = "found the needle at position 6";
    expect(input).toBe(expectedResult);
  });
});
