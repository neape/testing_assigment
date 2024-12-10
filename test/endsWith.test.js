import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith", () => {
  it("should return true if the string ends with the given target string", () => {
    expect(endsWith("abc", "c")).to.be.true;
  });

  it("should return false if the string does not end with the given target string", () => {
    expect(endsWith("abc", "b")).to.be.false;
  });

  it("should return true if the string ends with the given target string up to the specified position", () => {
    expect(endsWith("abc", "b", 2)).to.be.true;
  });

  it("should return false if the string does not end with the given target string up to the specified position", () => {
    expect(endsWith("abc", "c", 2)).to.be.false;
  });

  it("should handle an empty string and return false", () => {
    expect(endsWith("", "a")).to.be.false;
  });

  it("should handle an empty target string and return true", () => {
    expect(endsWith("abc", "")).to.be.true;
  });

  it("should handle a position greater than the string length", () => {
    expect(endsWith("abc", "c", 5)).to.be.true;
  });

  it("should handle a negative position and return false", () => {
    expect(endsWith("abc", "a", -1)).to.be.false;
  });
});
