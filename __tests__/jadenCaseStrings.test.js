require("../jadenCaseStrings");

test("converts a string to JadenCase", () => {
  const input = "how can mirrors be real if our eyes aren't real";
  const expected = "How Can Mirrors Be Real If Our Eyes Aren't Real";
  expect(input.toJadenCase()).toBe(expected);
});
