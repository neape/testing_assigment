import { expect } from "chai";
import at from "../src/at.js";

describe("at function", () => {
  const object = { a: [{ b: { c: 3 } }, 4] };

  it("should return the correct values for given paths", () => {
    const result = at(object, "a[0].b.c", "a[1]");
    expect(result).to.deep.equal([3, 4]);
  });

  it("should return undefined for non-existent paths", () => {
    const result = at(object, "a[0].b.d", "a[2]");
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it("should handle paths with array index correctly", () => {
    const result = at(object, "a[0]");
    expect(result).to.deep.equal([{ b: { c: 3 } }, 4]);
  });

  it("should return an empty array when the object is empty", () => {
    const result = at({}, "a[0].b.c");
    expect(result).to.deep.equal([undefined]);
  });

  it("should handle multiple paths correctly", () => {
    const result = at(object, "a[0].b.c", "a[1]", "a[0]");
    expect(result).to.deep.equal([3, 4, [{ b: { c: 3 } }, 4]]);
  });
});
