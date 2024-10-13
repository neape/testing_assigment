import add from '../add';

describe('add function', () => {
    test('correctly adds two positive numbers', () => {
      expect(add(6, 4)).toBe(10);
    });
  });