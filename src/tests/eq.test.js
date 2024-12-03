import eq from "../eq.js";

describe("eq function", () => {
  test("returns true for identical primitive values", () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq("a", "a")).toBe(true);
    expect(eq(true, true)).toBe(true);
  });

  test("returns false for different primitive values", () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq("a", "b")).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

  test("returns true for references to the same object", () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
  });

  test("returns false for different objects with same content", () => {
    const object1 = { a: 1 };
    const object2 = { a: 1 };
    expect(eq(object1, object2)).toBe(false);
  });

  test("handles special cases correctly", () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(0, -0)).toBe(true);
  });

  //   test('returns false when comparing primitive to its object counterpart', () => {
  //     expect(eq('a', new String('a'))).toBe(false);
  //     expect(eq(1, new Number(1))).toBe(false);
  //     expect(eq(true, new Boolean(true))).toBe(false);
  //   });

  // test('handles null and undefined', () => {
  //   expect(eq(null, null)).toBe(true);
  //   expect(eq(undefined, undefined)).toBe(true);
  //   expect(eq(null, undefined)).toBe(false);
  // });

  test("returns false for different instances of the same class", () => {
    class MyClass {}
    expect(eq(new MyClass(), new MyClass())).toBe(false);
  });

  test("returns false for different functions", () => {
    expect(
      eq(
        () => {},
        () => {}
      )
    ).toBe(false);
  });
});
