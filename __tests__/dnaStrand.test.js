const dnaStrand = require("../dnaStrand");

describe("dnaStrand", () => {
  test("should return the complementary paired DNA from the input string", () => {
    expect(dnaStrand("ATTGC")).toBe("TAACG");
  });
  test("should return the complementary paired DNA from the input string", () => {
    expect(dnaStrand("TTACG")).toBe("AATGC");
  });
  test("should handle characters that aren't A, C, T or G", () => {
    expect(dnaStrand("ABTAC")).toBe("TBATG");
  });
});
