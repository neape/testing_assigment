import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {
  it("should round up to the nearest integer when precision is 0", () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(10)).to.equal(10);
    expect(ceil(10.1)).to.equal(11);
  });

  it("should round up to the specified precision (positive)", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(6.01, 1)).to.equal(6.1);
  });

  it("should round up to the specified precision (negative)", () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(750, -1)).to.equal(750);
  });

  it("should handle negative numbers correctly", () => {
    expect(ceil(-4.006)).to.equal(-4);
    expect(ceil(-6.004, 2)).to.equal(-6);
    expect(ceil(-6040, -2)).to.equal(-6000);
  });

  it("should handle edge cases like 0", () => {
    expect(ceil(0)).to.equal(0);
    expect(ceil(-0)).to.equal(0);
  });

  it("should handle large numbers", () => {
    expect(ceil(1e10, -10)).to.equal(1e10);
    expect(ceil(-1e10, -10)).to.equal(-1e10);
  });

  // Pitäiskö?
  it("should handle non-integer precision values (precision gets truncated)", () => {
    //expect(ceil(5.678, 1.8)).to.equal(5.7); // Treat 1.8 as 1
    expect(ceil(5.678, -2.3)).to.equal(100); // Treat -2.3 as -2
  });

  it("should handle invalid inputs gracefully", () => {
    expect(() => ceil("string")).to.throw(); // Invalid number input.
    expect(() => ceil(5.678, "string")).to.throw(); // Invalid precision input.
  });
});
