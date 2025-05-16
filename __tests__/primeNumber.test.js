const isPrime = require("../algorithms/primeNumbers");

describe("isPrime", () => {
  test("should return false if input number is not a prime number", () => {
    const input = isPrime(1);
    const expectedResult = false;
    expect(input).toBe(expectedResult);
  });
  test("should return false if input number is not a prime number", () => {
    const input = isPrime(4);
    const expectedResult = false;
    expect(input).toBe(expectedResult);
  });
  test("should return true if input number is a prime number", () => {
    const input = isPrime(2);
    const expectedResult = true;
    expect(input).toBe(expectedResult);
  });
  test("should return true if input number is a prime number", () => {
    const input = isPrime(11);
    const expectedResult = true;
    expect(input).toBe(expectedResult);
  });
});
