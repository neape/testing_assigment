import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {
  it("should round up to the nearest integer when precision is 0", () => {
    expect(ceil(4.006)).to.equal(5);
    expect(ceil(10)).to.equal(10);
    expect(ceil(10.1)).to.equal(11);
    expect(ceil(-10.1)).to.equal(-10);
  });

  it("should round up to the specified positive precision", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
    expect(ceil(6.01, 1)).to.equal(6.1);
    expect(ceil(-6.004, 2)).to.equal(-6.0);
  });

  it("should round up to the specified negative precision", () => {
    expect(ceil(6040, -2)).to.equal(6100);
    expect(ceil(750, -1)).to.equal(750);
    expect(ceil(-6040, -2)).to.equal(-6000);
  });

  it("should handle edge cases like 0", () => {
    expect(ceil(0)).to.equal(0);
    expect(ceil(-0)).to.equal(0);
    expect(ceil(0, 2)).to.equal(0);
    expect(ceil(0, -2)).to.equal(0);
  });

  it("should handle large numbers", () => {
    expect(ceil(1e10, -10)).to.equal(1e10);
    expect(ceil(-1e10, -10)).to.equal(-1e10);
    expect(ceil(1e10 + 1234, -3)).to.equal(1e10 + 2000);
  });

  it("should handle negative numbers correctly", () => {
    expect(ceil(-4.006)).to.equal(-4);
    expect(ceil(-6.004, 2)).to.equal(-6);
    expect(ceil(-6040, -2)).to.equal(-6000);
  });

  it("should handle fractional inputs close to integers", () => {
    expect(ceil(9.9999)).to.equal(10);
    expect(ceil(-9.9999)).to.equal(-9);
    expect(ceil(1.00001)).to.equal(2);
    expect(ceil(-1.00001)).to.equal(-1);
  });

  it("should round up numbers with very high precision correctly", () => {
    expect(ceil(1.000000000123, 10)).to.equal(1.0000000002);
    expect(ceil(-1.000000000123, 10)).to.equal(-1.0000000001);
  });
});
