const findShort = require("../shortestWord");

describe("findShort", () => {
  test("should return the length of the shortest word", () => {
    const input = findShort("Well hello there");
    const expectedResult = 4;
    expect(input).toBe(expectedResult);
  });
});
