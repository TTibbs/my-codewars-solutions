const usdcny = require("../usdToCny");

describe("usdcny", () => {
  test("should return the CNY equivalent of the given USD amount", () => {
    const input = usdcny(15);
    const expectedResult = "101.25 Chinese Yuan";
    expect(input).toBe(expectedResult);
  });
  test("should return the CNY equivalent of the given USD amount", () => {
    const input = usdcny(465);
    const expectedResult = "3138.75 Chinese Yuan";
    expect(input).toBe(expectedResult);
  });
  test("should return the CNY equivalent of the given USD amount", () => {
    const input = usdcny(420.69);
    const expectedResult = "2839.66 Chinese Yuan";
    expect(input).toBe(expectedResult);
  });
});
