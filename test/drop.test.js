import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop", () => {
  it("should drop one element by default", () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    expect(drop(["a", "b", "c", "d"])).to.deep.equal(["b", "c", "d"]);
  });

  it("should drop n elements from the beginning", () => {
    const result = drop([1, 2, 3], 2);
    expect(result).to.deep.equal([3]);
  });

  it("should return an empty array if n is greater than the array length", () => {
    const result = drop([1, 2, 3], 5);
    expect(result).to.deep.equal([]);
  });

  it("should return the same array if n is 0", () => {
    const result = drop([1, 2, 3], 0);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should return the same array if n is negative", () => {
    const result = drop([1, 2, 3], -1);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should return an empty array when n is zero for an empty array", () => {
    const result = drop([], 0);
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if array is empty, null or undefined", () => {
    expect(drop([], 2)).to.deep.equal([]);
    expect(drop(null, 2)).to.deep.equal([]);
    expect(drop(undefined, 2)).to.deep.equal([]);
  });

  it("should handle arrays with all kinds of values", () => {
    const result = drop([false, NaN, "", null, undefined, [], {}], 2);
    expect(result).to.deep.equal(["", null, undefined, [], {}]);
  });

  it("should handle large arrays and drop elements correctly", () => {
    const largeArray = new Array(1e5).fill(1).concat([2, 3, 4, 5]);
    const result = drop(largeArray, 100); // Drop first 100 elements
    expect(result.length).to.equal(99904);
    expect(result[0]).to.equal(1); // The first element after dropping 100 should be 1
  });

  it("should handle fractional n as integer", () => {
    const result = drop([1, 2, 3, 4], 2.5);
    expect(result).to.deep.equal([3, 4]); // Fractional n gets truncated to 2
  });
});
