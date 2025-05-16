const filterList = require("../fundamentals/data-structures/listFiltering");

describe("filterList", () => {
  test("should filter an array and return the numbers only from it", () => {
    const input = filterList([1, 2, "a", "b"]);
    const expectedResult = [1, 2];
    expect(input).toEqual(expectedResult);
  });
  test("should filter an array and return the numbers only from it", () => {
    const input = filterList([1, "a", "b", 0, 15]);
    const expectedResult = [1, 0, 15];
    expect(input).toEqual(expectedResult);
  });
  test("should filter an array and return the numbers only from it", () => {
    const input = filterList([1, 2, "remove me", "and me", "and me too", 123]);
    const expectedResult = [1, 2, 123];
    expect(input).toEqual(expectedResult);
  });
});
