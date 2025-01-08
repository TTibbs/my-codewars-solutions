const removeEveryOther = require("../removingElements");

describe("removeEveryOther", () => {
  test("should return an empty array when input is an empty array", () => {
    const input = removeEveryOther([]);
    const expectedResult = [];
    expect(input).toEqual(expectedResult);
  });
  test("should return an array with one element when input is an array with one element", () => {
    const input = removeEveryOther(["Hello"]);
    const expectedResult = ["Hello"];
    expect(input).toEqual(expectedResult);
  });
  test("should return an array with one element when input is an array with two elements", () => {
    const input = removeEveryOther(["Hello", "Goodbye"]);
    const expectedResult = ["Hello"];
    expect(input).toEqual(expectedResult);
  });
  test("should remove every other element from the array", () => {
    const input = removeEveryOther([
      "Hello",
      "Goodbye",
      "Hello Again",
      "Hello Again Again",
    ]);
    const expectedResult = ["Hello", "Hello Again"];
    expect(input).toEqual(expectedResult);
  });
});
