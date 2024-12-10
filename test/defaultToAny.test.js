import { expect } from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny", () => {
  it("should return the value if it is not NaN, null, or undefined", () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny("hello", "default", "another")).to.equal("hello");
    expect(defaultToAny(true, false, true)).to.equal(true);
  });

  it("should return the first default value if the value is undefined", () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
  });

  it("should return the first default value if the value is null", () => {
    expect(defaultToAny(null, "default", "another")).to.equal("default");
  });

  it("should return the first default value if the value is NaN", () => {
    expect(defaultToAny(NaN, "default", "another")).to.equal("default");
  });

  it("should return the first non-NaN, non-null, non-undefined default value", () => {
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
    expect(defaultToAny(undefined, null, NaN, 30)).to.equal(30);
  });

  it("should return NaN if all values are NaN, null, or undefined", () => {
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });

  it("should handle an empty string as a valid value", () => {
    expect(defaultToAny("", "default", "another")).to.equal("");
  });

  it("should handle zero as a valid value", () => {
    expect(defaultToAny(0, 10, 20)).to.equal(0);
  });

  it("should handle false as a valid value", () => {
    expect(defaultToAny(false, true, false)).to.equal(false);
  });

  it("should handle an empty array as a valid value", () => {
    expect(defaultToAny([], "default", "another")).to.deep.equal([]);
  });

  it("should handle an empty object as a valid value", () => {
    expect(defaultToAny({}, "default", "another")).to.deep.equal({});
  });
});
