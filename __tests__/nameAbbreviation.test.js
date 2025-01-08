const abbrevName = require("../nameAbbreviation");

describe("abbrevName", () => {
  test("should return the abbreviation of a name", () => {
    const input = abbrevName("Type Script");
    const expectedResult = "T.S";
    expect(input).toBe(expectedResult);
  });
  test("should return the abbreviation of a name", () => {
    const input = abbrevName("Java Script");
    const expectedResult = "J.S";
    expect(input).toBe(expectedResult);
  });
});
