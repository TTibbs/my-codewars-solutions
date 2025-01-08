const descendingOrder = require("../descendingOrder");

describe("descendingOrder", () => {
  test("should return 0 when input is 0", () => {
    const input = descendingOrder(0);
    const expectedResult = 0;
    expect(input).toBe(expectedResult);
  });
  test("should return 1 when input is 1", () => {
    const input = descendingOrder(1);
    const expectedResult = 1;
    expect(input).toBe(expectedResult);
  });
  test("should return 51 when input is 15", () => {
    const input = descendingOrder(15);
    const expectedResult = 51;
    expect(input).toBe(expectedResult);
  });
  test("should return 987654321 when input is 123456789", () => {
    const input = descendingOrder(123456789);
    const expectedResult = 987654321;
    expect(input).toBe(expectedResult);
  });
});
