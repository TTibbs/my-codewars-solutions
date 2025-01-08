const solve = require("../fixStringCase");

describe("Fix String Case", () => {
  test("should return a string with all lowercase characters", () => {
    const input = solve("code");
    const expectedResult = "code";
    expect(input).toBe(expectedResult);
  });
  test("should return a string with all uppercase characters", () => {
    const input = solve("CODE");
    const expectedResult = "CODE";
    expect(input).toBe(expectedResult);
  });
  test("should return lowercase characters if uppercase and lowercase characters are equal", () => {
    const input = solve("CoDe");
    const expectedResult = "code";
    expect(input).toBe(expectedResult);
  });
});
