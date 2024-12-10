import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", () => {
  it("should clamp a number within the range", () => {
    expect(clamp(3, 1, 5)).to.equal(3);
  });

  it("should clamp a number to the lower bound", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it("should clamp a number to the upper bound", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });

  it("should handle lower and upper bounds being equal", () => {
    expect(clamp(10, 5, 5)).to.equal(5);
    expect(clamp(-10, 5, 5)).to.equal(5);
    expect(clamp(5, 5, 5)).to.equal(5);
  });

  it("should handle non-numeric inputs for `number`", () => {
    expect(clamp("10", -5, 5)).to.equal(5);
    expect(clamp(NaN, -5, 5)).to.equal(0); 
  });

  it("should handle non-numeric inputs for `lower` and `upper`", () => {
    expect(clamp(10, "5", "15")).to.equal(10);
    expect(clamp(10, NaN, 15)).to.equal(10);
    expect(clamp(10, 5, NaN)).to.equal(5);
  });

  it("should handle edge cases with Infinity", () => {
    expect(clamp(10, -Infinity, Infinity)).to.equal(10);
    expect(clamp(Infinity, -5, 5)).to.equal(5);
    expect(clamp(-Infinity, -5, 5)).to.equal(-5);
  });

  it("should handle zero bounds", () => {
    expect(clamp(10, 0, 0)).to.equal(0);
    expect(clamp(-10, 0, 5)).to.equal(0);
    expect(clamp(10, -5, 0)).to.equal(0);
});
