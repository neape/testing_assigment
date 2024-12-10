import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should remove all falsey values from the array", () => {
    const result = compact([0, 1, false, 2, "", 3]);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should return an empty array when given an empty array", () => {
    const result = compact([]);
    expect(result).to.deep.equal([]);
  });

  it("should return the same array if all elements are truthy", () => {
    const result = compact([1, 2, "hello", true, []]);
    expect(result).to.deep.equal([1, 2, "hello", true, []]);
  });

  it("should remove only falsey values, not falsy objects or arrays", () => {
    const result = compact([{}, [], 0, "", NaN, undefined, false, true]);
    expect(result).to.deep.equal([{}, [], true]);
  });

  it("should handle arrays with only falsey values and return an empty array", () => {
    const result = compact([false, null, 0, "", undefined, NaN]);
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array for an array of only NaN values", () => {
    const result = compact([NaN, NaN, NaN]);
    expect(result).to.deep.equal([]);
  });

  it("should handle arrays with mixed truthy and falsey values", () => {
    const result = compact([
      0,
      1,
      false,
      2,
      "",
      3,
      null,
      undefined,
      NaN,
      "test",
    ]);
    expect(result).to.deep.equal([1, 2, 3, "test"]);
  });

  it("should handle arrays with only truthy values", () => {
    const result = compact([1, "a", true, {}, []]);
    expect(result).to.deep.equal([1, "a", true, {}, []]);
  });

  it("should handle arrays with only falsey values", () => {
    const result = compact([0, false, "", null, undefined, NaN]);
    expect(result).to.deep.equal([]);
  });

  it("should handle arrays with nested arrays and objects", () => {
    const result = compact([0, [1, 2], false, { a: 1 }, "", null]);
    expect(result).to.deep.equal([[1, 2], { a: 1 }]);
  });

  it("should handle arrays with different types of falsey values", () => {
    const result = compact([false, null, 0, "", undefined, NaN]);
    expect(result).to.deep.equal([]);
  });

  it("should handle arrays with boolean values", () => {
    const result = compact([true, false, true, false]);
    expect(result).to.deep.equal([true, true]);
  });

  it("should handle arrays with null and undefined values", () => {
    const result = compact([null, undefined, 1, 2, 3]);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});
