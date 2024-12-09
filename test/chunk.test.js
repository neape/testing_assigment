import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should split the array into chunks of the given size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).to.deep.equal([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it("should handle uneven splitting of the array", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).to.deep.equal([
      ["a", "b", "c"],
      ["d"],
    ]);
    expect(chunk([1, 2, 3, 4, 5, 6], 4)).to.deep.equal([[1]]);
  });

  it("should return input array when array length = chunk size", () => {
    expect(chunk(["a", "b", "c", "d"], 4)).to.deep.equal([
      ["a", "b", "c", "d"],
    ]);
  });

  it("should handle arrays with fewer elements than the chunk size", () => {
    expect(chunk(["a", "b"], 3)).to.deep.equal([["a", "b"]]); // Array size < chunk size
    expect(chunk([1, 2, 3], 5)).to.deep.equal([[1, 2, 3]]);
    expect(chunk([1], 5)).to.deep.equal([[1]]); // Single element in array
  });

  it("should return an empty array for an empty input array", () => {
    expect(chunk([], 2)).to.deep.equal([]); // Empty array input
  });

  it("should handle a chunk size of 1", () => {
    expect(chunk([1, 2, 3, 4], 1)).to.deep.equal([[1], [2], [3], [4]]); // Chunk size 1
  });

  it("should handle chunk size of 0 and return an empty array", () => {
    expect(chunk([1, 2, 3], 0)).to.deep.equal([]);
  });

  it("should handle negative sizes and return an empty array", () => {
    expect(chunk([1, 2, 3], -2)).to.deep.equal([]);
  });

  it("should handle non-numeric size values by coercing to integers", () => {
    expect(chunk([1, 2, 3, 4], "2")).to.deep.equal([
      [1, 2],
      [3, 4],
    ]); // Coerce string '2' to 2
    expect(chunk([1, 2, 3, 4], 2.5)).to.deep.equal([
      [1, 2],
      [3, 4],
    ]); // Coerce float 2.5 to 2
    expect(chunk([1, 2, 3, 4], "abc")).to.deep.equal([[1], [2], [3], [4]]); // Non-numeric string defaults to 1
  });

  it("should return empty array for null or undefined array", () => {
    expect(chunk(null, 2)).to.deep.equal([]); // Null input
    expect(chunk(undefined, 2)).to.deep.equal([]); // Undefined input
  });

  it("should handle large arrays correctly", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    const result = chunk(largeArray, 200);
    expect(result.length).to.equal(5); // There should be 5 chunks (1000 / 200)
    expect(result[0].length).to.equal(200); // First chunk should have 200 elements
    expect(result[4].length).to.equal(200); // Last chunk should also have 200 elements
  });
});
