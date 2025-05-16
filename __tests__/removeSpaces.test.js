const noSpace = require("../fundamentals/strings/removeSpaces");

describe("noSpace", () => {
  test("should return an empty string when input is an empty string", () => {
    const input = noSpace("");
    const expectedResult = "";
    expect(input).toBe(expectedResult);
  });
  test("should return the same string when input is a string with no spaces", () => {
    const input = noSpace("Hello");
    const expectedResult = "Hello";
    expect(input).toBe(expectedResult);
  });
  test("should return a string with no spaces when input is a string with spaces", () => {
    const input = noSpace("Hello World");
    const expectedResult = "HelloWorld";
    expect(input).toBe(expectedResult);
  });
  test("should return a string with no spaces when input is a string with multiple spaces", () => {
    const input = noSpace("Hello World Again");
    const expectedResult = "HelloWorldAgain";
    expect(input).toBe(expectedResult);
  });
});
