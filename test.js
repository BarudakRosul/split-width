const assert = require("assert");
require("./index");

describe("Testing splitWidth() prototype", function() {
  it("should split a string into substrings of specified width", function() {
    const str = "abcdefghij";
    const result = str.splitWidth(2);
    assert.deepStrictEqual(result, ["ab", "cd", "ef", "gh", "ij"]);
  });

  it("should handle strings where length is not a multiple of width", function() {
    const str = "abcdefgh";
    const result = str.splitWidth(3);
    assert.deepStrictEqual(result, ["abc", "def", "gh"]);
  });

  it("should return the entire string if width is equal to the string length", function() {
    const str = "abcdef";
    const result = str.splitWidth(6);
    assert.deepStrictEqual(result, ["abcdef"]);
  });

  it("should return single characters if width is 1", function() {
    const str = "abcdef";
    const result = str.splitWidth(1);
    assert.deepStrictEqual(result, ["a", "b", "c", "d", "e", "f"]);
  });

  it("should handle strings with special characters", function() {
    const str = "a!@#b$%^c";
    const result = str.splitWidth(2);
    assert.deepStrictEqual(result, ["a!", "@#", "b$", "%^", "c"]);
  });

  it("should throw an error if width is less than or equal to 0", function() {
    const str = "abcdef";
    assert.throws(() => str.splitWidth(0), /Width must be greater than 0/);
    assert.throws(() => str.splitWidth(-1), /Width must be greater than 0/);
  });

  it("should return an empty array if the string is empty", function() {
    const str = "";
    const result = str.splitWidth(3);
    assert.deepStrictEqual(result, []);
  });

  it("should handle strings with spaces", function() {
    const str = "abc def ghi";
    const result = str.splitWidth(4);
    assert.deepStrictEqual(result, ["abc ", "def ", "ghi"]);
  });
});
