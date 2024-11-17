import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).to.be.true;
  });

  it('should return false for non-Date values', () => {
    expect(isDate('Mon April 23 2012')).to.be.false;
    expect(isDate(null)).to.be.false;
    expect(isDate(undefined)).to.be.false;
    expect(isDate(42)).to.be.false;
    expect(isDate({})).to.be.false;
    expect(isDate([])).to.be.false;
  });

  it('should return false for objects that are not Date objects', () => {
    expect(isDate({ toString: () => '[object Date]' })).to.be.false;
  });
});