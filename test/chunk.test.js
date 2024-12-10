import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should split the array into chunks of the given size", () => {
    const result = chunk(["a", "b", "c", "d"], 2);
    expect(result).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("should handle uneven splitting of the array", () => {
    const result = chunk(["a", "b", "c", "d"], 3);
    expect(result).to.deep.equal([["a", "b", "c"], ["d"]]);
  });

  it("should return input array when array length = chunk size", () => {
    const result = chunk(["a", "b", "c", "d"], 4);
    expect(result).to.deep.equal([["a", "b", "c", "d"]]);
  });

  it("should handle arrays with fewer elements than the chunk size", () => {
    const result1 = chunk(["a", "b"], 3);
    expect(result1).to.deep.equal([["a", "b"]]);

    const result2 = chunk([1, 2, 3], 5);
    expect(result2).to.deep.equal([[1, 2, 3]]);

    const result3 = chunk([1], 5);
    expect(result3).to.deep.equal([[1]]);
  });

  it("should return an empty array for an empty input array", () => {
    const result = chunk([], 2);
    expect(result).to.deep.equal([]);
  });

  it("should handle a chunk size of 1", () => {
    const result = chunk([1, 2, 3, 4], 1);
    expect(result).to.deep.equal([[1], [2], [3], [4]]);
  });

  it("should handle chunk size of 0 and return an empty array", () => {
    const result = chunk([1, 2, 3], 0);
    expect(result).to.deep.equal([]);
  });

  it("should handle negative sizes and return an empty array", () => {
    const result = chunk([1, 2, 3], -2);
    expect(result).to.deep.equal([]);
  });

  it("should return empty array for null or undefined array", () => {
    const result1 = chunk(null, 2);
    expect(result1).to.deep.equal([]);

    const result2 = chunk(undefined, 2);
    expect(result2).to.deep.equal([]);
  });
});
