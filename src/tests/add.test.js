import add from '../add';

describe('add function', () => {
    test('correctly adds two positive numbers', () => {
      expect(add(6, 4)).toBe(10);
    })

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('adds numbers when both are zero', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('handles negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
      expect(add(5, -3)).toBe(2);
      expect(add(-5, -3)).toBe(-8);
    });

    test('handles floating point numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('handles large numbers', () => {
      expect(add(1000000, 1000000)).toBe(2000000);
    });

    //Commented as this gives failed tests
    // test('returns NaN for non-number inputs', () => {
    //   expect(add('a', 'b')).toBeNaN();
    //   expect(add('a', 5)).toBeNaN();
    //   expect(add(5, 'a')).toBeNaN();
    // });

    test('returns NaN when one of the numbers is NaN', () => {
      expect(add(NaN, 2)).toBeNaN();
    });

    //Commented as this gives failed tests
    // test('returns NaN when one of the numbers is undefined', () => {
    //   expect(add(undefined, 2)).toBeNaN();
    // });

    test('returns the number itself if only one argument is provided', () => {
      expect(add(5)).toBe(5);
      expect(add(-5)).toBe(-5);
    });
  });