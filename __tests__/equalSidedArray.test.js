const findEvenIndex = require("../equalSidedArray");

describe("findEvenIndex", () => {
  test("should return -1 if there is no even indexes either end of the array", () => {
    expect(findEvenIndex([1, 4, 8, 2, 5, 10, 3])).toBe(-1);
  });
  test("should return the correct sum if the array has equal numbers either end of it from the middle", () => {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
  });
  test("should return the correct sum if the array has equal numbers either end of it from the middle", () => {
    expect(findEvenIndex([4, 8, 12, 16, 20, 16, 12, 8, 4])).toBe(4);
  });
});
