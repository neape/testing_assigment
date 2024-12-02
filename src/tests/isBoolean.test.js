import isBoolean from '../isBoolean.js';

describe('isBoolean function', () => {
  test('returns true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  test('returns true for boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  test('returns false for non-boolean primitives', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
  });

  test('returns false for non-boolean objects', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });

  test('returns false for falsy values other than false', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
  });

  test('returns false for truthy values other than true', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
  });

  test('returns false for function', () => {
    expect(isBoolean(() => {})).toBe(false);
  });
  
  test('returns false for symbol', () => {
    expect(isBoolean(Symbol('symbol'))).toBe(false);
  });
  
  test('returns false for instance of a class', () => {
    class MyClass {}
    expect(isBoolean(new MyClass())).toBe(false);
  });
  
  test('returns true for Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });
});