import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should remove all falsey values from the array", () => {
    const result = compact([0, 1, false, 2, "", 3]);
    expect(result).to.deep.equal([1, 2, 3]); // falsey values (0, false, "", undefined, NaN) are removed
  });

  it("should return an empty array when given an empty array", () => {
    const result = compact([]);
    expect(result).to.deep.equal([]); // Empty array returns empty array
  });

  it("should return the same array if all elements are truthy", () => {
    const result = compact([1, 2, "hello", true, []]);
    expect(result).to.deep.equal([1, 2, "hello", true, []]); // No falsey values to remove
  });

  it("should remove only falsey values, not falsy objects or arrays", () => {
    const result = compact([{}, [], 0, "", NaN, undefined, false, true]);
    expect(result).to.deep.equal([{}, [], true]); // 0, '', NaN, undefined, and false are removed
  });

  it("should handle arrays with only falsey values and return an empty array", () => {
    const result = compact([false, null, 0, "", undefined, NaN]);
    expect(result).to.deep.equal([]); // All values are falsey, so the result should be empty
  });

  it("should return an empty array for an array of only NaN values", () => {
    const result = compact([NaN, NaN, NaN]);
    expect(result).to.deep.equal([]); // All values are NaN (falsey)
  });

  it("should handle arrays with special characters or symbols", () => {
    const result = compact([Symbol("sym"), "", "hello"]);
    expect(result).to.deep.equal([Symbol("sym"), "hello"]); // Empty string is removed, symbol remains
  });

  it("should handle large arrays efficiently", () => {
    const largeArray = new Array(1e6).fill(0).concat([1, 2, 3]);
    const result = compact(largeArray);
    expect(result).to.deep.equal([1, 2, 3]); // Only 1, 2, 3 should remain in the result
    expect(result.length).to.equal(3); // Check if the result has only 3 items
  });
});
