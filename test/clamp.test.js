import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", () => {
  it("should clamp a number within the range", () => {
    expect(clamp(3, 1, 5)).to.equal(3); // Within bounds, unchanged
  });

  it("should clamp a number to the lower bound", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5); // Below lower bound
  });

  it("should clamp a number to the upper bound", () => {
    expect(clamp(10, -5, 5)).to.equal(5); // Above upper bound
  });

  it("should handle lower and upper bounds being equal", () => {
    expect(clamp(10, 5, 5)).to.equal(5); // Both bounds are the same
    expect(clamp(-10, 5, 5)).to.equal(5); // Number below the bound
    expect(clamp(5, 5, 5)).to.equal(5); // Number equal to the bound
  });

  it("should handle non-numeric inputs for `number`", () => {
    expect(clamp("10", -5, 5)).to.equal(5); // String input gets coerced
    expect(clamp(NaN, -5, 5)).to.equal(0); // NaN clamped to 0
  });

  it("should handle non-numeric inputs for `lower` and `upper`", () => {
    expect(clamp(10, "5", "15")).to.equal(10); // String bounds coerced
    expect(clamp(10, NaN, 15)).to.equal(10); // NaN lower bound defaults to 0
    expect(clamp(10, 5, NaN)).to.equal(5); // NaN upper bound defaults to 0
  });

  it("should handle swapped bounds (lower > upper)", () => {
    expect(clamp(3, 5, -5)).to.equal(5); // Correctly clamps to new upper
    expect(clamp(-10, 5, -5)).to.equal(-5); // Correctly clamps to new lower
  });

  it("should handle edge cases with Infinity", () => {
    expect(clamp(10, -Infinity, Infinity)).to.equal(10); // Any number within infinite bounds
    expect(clamp(Infinity, -5, 5)).to.equal(5); // Clamp Infinity to upper bound
    expect(clamp(-Infinity, -5, 5)).to.equal(-5); // Clamp -Infinity to lower bound
  });

  it("should handle zero bounds", () => {
    expect(clamp(10, 0, 0)).to.equal(0); // Both bounds zero
    expect(clamp(-10, 0, 5)).to.equal(0); // Lower bound zero
    expect(clamp(10, -5, 0)).to.equal(0); // Upper bound zero
  });
});
