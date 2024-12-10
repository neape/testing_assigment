import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter", () => {
  it("should filter elements based on the predicate function", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: "barney", active: true }]);
  });

  it("should return an empty array when no elements match the predicate", () => {
    const users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([]);
  });

  it("should return the same array if all elements match the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: true },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal(users);
  });

  it("should handle an empty array input", () => {
    const result = filter([], ({ active }) => active);
    expect(result).to.deep.equal([]);
  });

  it("should handle null or undefined array input", () => {
    const result1 = filter(null, ({ active }) => active);
    expect(result1).to.deep.equal([]);

    const result2 = filter(undefined, ({ active }) => active);
    expect(result2).to.deep.equal([]);
  });

  it("should handle a predicate that always returns true", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, () => true);
    expect(result).to.deep.equal(users);
  });

  it("should handle a predicate that always returns false", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, () => false);
    expect(result).to.deep.equal([]);
  });

  it("should handle an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (n) => n % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });

  it("should handle an array of strings", () => {
    const strings = ["apple", "banana", "cherry"];
    const result = filter(strings, (s) => s.includes("a"));
    expect(result).to.deep.equal(["apple", "banana"]);
  });
});
