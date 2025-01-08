const boolToWord = require("../booleanToString");

describe("boolToWord", () => {
  test("should return 'Yes' when input is true", () => {
    const input = boolToWord(true);
    const expectedResult = "Yes";
    expect(input).toBe(expectedResult);
  });
  test("should return 'No' when input is false", () => {
    const input = boolToWord(false);
    const expectedResult = "No";
    expect(input).toBe(expectedResult);
  });
  test("should return 'Invalid input' when input is not a boolean", () => {
    const input = boolToWord("Hello");
    const expectedResult = "Invalid input";
    expect(input).toBe(expectedResult);
  });
});
