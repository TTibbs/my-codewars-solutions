const encode = require("../stringCypher");

describe("encode", () => {
  test("should return the cyphered string from the input", () => {
    const input = encode("Hello World!");
    const expectedResult = "10110 00111!";
    expect(input).toBe(expectedResult);
  });
  test("should return the cyphered string from a longer input", () => {
    const input = encode("My name is Geoff");
    const expectedResult = "00 1000 00 00011";
    expect(input).toBe(expectedResult);
  });
});
