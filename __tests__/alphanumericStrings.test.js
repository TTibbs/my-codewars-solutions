const alphanumeric = require("../alphanumericStrings");

describe("alphanumeric", () => {
  test("should return an error message if a string is less than 2 characters", () => {
    expect(alphanumeric("a")).toBe("String must be longer than 1 character");
  });
  test("should return true if a string is alphanumeric", () => {
    expect(alphanumeric("abc123")).toBe(true);
  });
  test("should return false if a string is not alphanumeric", () => {
    expect(alphanumeric("not alphanumeric")).toBe(false);
  });
  test("should return false if a string is not alphanumeric", () => {
    expect(alphanumeric("not_alphanumeric")).toBe(false);
  });
});
