import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  it("should return the value if it is not NaN, null, or undefined", () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo("hello", "default")).to.equal("hello");
    expect(defaultTo(true, false)).to.equal(true);
  });

  it("should return the default value if the value is undefined", () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  it("should return the default value if the value is null", () => {
    expect(defaultTo(null, "default")).to.equal("default");
  });

  it("should return the default value if the value is NaN", () => {
    expect(defaultTo(NaN, "default")).to.equal("default");
  });

  it("should handle an empty string as a valid value", () => {
    expect(defaultTo("", "default")).to.equal("");
  });

  it("should handle zero as a valid value", () => {
    expect(defaultTo(0, 10)).to.equal(0);
  });

  it("should handle false as a valid value", () => {
    expect(defaultTo(false, true)).to.equal(false);
  });

  it("should handle an empty array as a valid value", () => {
    expect(defaultTo([], "default")).to.deep.equal([]);
  });

  it("should handle an empty object as a valid value", () => {
    expect(defaultTo({}, "default")).to.deep.equal({});
  });
});
