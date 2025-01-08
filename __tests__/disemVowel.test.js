const disemvowel = require("../disemVowel");

describe("disemvowel", () => {
  test("should remove vowels from a string", () => {
    const input = disemvowel("aeiou");
    const expectedResult = "";
    expect(input).toBe(expectedResult);
  });
  test("should remove vowels from a string", () => {
    const input = disemvowel("Testing is for LOSERS lol");
    const expectedResult = "Tstng s fr LSRS ll";
    expect(input).toBe(expectedResult);
  });
});
