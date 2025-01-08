const removeChar = require("../removeFirstAndLastCharacter");

describe("removeChar", () => {
  test("should return an empty string when input is an empty string", () => {
    const input = removeChar("");
    const expectedResult = "";
    expect(input).toBe(expectedResult);
  });
  test("should return an empty string when input is a string with one character", () => {
    const input = removeChar("a");
    const expectedResult = "";
    expect(input).toBe(expectedResult);
  });
  test("should remove the first and last character of a string", () => {
    const input = removeChar("abc");
    const expectedResult = "b";
    expect(input).toBe(expectedResult);
  });
  test("should remove the first and last character of a string", () => {
    const input = removeChar("Hello World");
    const expectedResult = "ello Worl";
    expect(input).toBe(expectedResult);
  });
});
