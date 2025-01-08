const solution = require("../reversedStrings");

describe("solution", () => {
  test("should return the reversed string", () => {
    const input = solution("Hello");
    const expectedResult = "olleH";
    expect(input).toBe(expectedResult);
  });
  test("should return the reversed string", () => {
    const input = solution("World");
    const expectedResult = "dlroW";
    expect(input).toBe(expectedResult);
  });
  test("should return the reversed string", () => {
    const input = solution("Hello World!");
    const expectedResult = "!dlroW olleH";
    expect(input).toBe(expectedResult);
  });
  test("should return the reversed string", () => {
    const input = solution("Hello World Again!");
    const expectedResult = "!niagA dlroW olleH";
    expect(input).toBe(expectedResult);
  });
});
