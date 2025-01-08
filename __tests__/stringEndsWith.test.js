const solution = require("../stringEndsWith");

describe("stringEndsWith", () => {
  test("should return true when the ending is at the end of the string", () => {
    const input = solution("abc", "bc");
    const expectedResult = true;
    expect(input).toBe(expectedResult);
  });
  test("should return true when the ending is the same as the string", () => {
    const input = solution("Hello World!", "rld!");
    const expectedResult = true;
    expect(input).toBe(expectedResult);
  });
  test("should return false when the ending is not at the end of the string", () => {
    const input = solution("abc", "d");
    const expectedResult = false;
    expect(input).toBe(expectedResult);
  });
});
