const validatePIN = require("../fundamentals/strings/validPinCode");

describe("validatePin", () => {
  test("should return true if the pin is valid", () => {
    expect(validatePIN(1234)).toBe(true);
  });
  test("should return true if the pin is valid", () => {
    expect(validatePIN(123456)).toBe(true);
  });
  test("should return false if the pin is invalid", () => {
    expect(validatePIN(12345)).toBe(false);
  });
  test("should return false if the pin is invalid", () => {
    expect(validatePIN("a234")).toBe(false);
  });
});
