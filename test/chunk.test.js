import * as chai from 'chai';
var expect = chai.expect;
import chunk from '../src/chunk.js';

describe('Testing chunk.js', () => {
    it('Should split an array into chunks by the given size', () => {
        const result1 = chunk(['a', 'b', 'c', 'd'], 2);        
        const result2 = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 3);

        expect(result1).to.deep.equal([['a', 'b'], ['c', 'd']]);
        expect(result2).to.deep.equal([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]);

    })

    it('Should be able to handle uneven chunks', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 3);
        expect(result).to.deep.equal([['a', 'b', 'c'], ['d']]);
    })

    it('Should work with the default value for chunk size 1', () => {
        const result = chunk(['a', 'b', 'c', 'd']);
        expect(result).to.deep.equal([['a'],['b'],['c'],['d']]);
    })

    it('Should handle chunk equal in lenght to array', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 4);
        expect(result).to.deep.equal([['a', 'b', 'c', 'd']]); 
    })

    it('Should handle chunk longer than array', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 5);
        expect(result).to.deep.equal([['a', 'b', 'c', 'd']]); 
    })

    it('Should handle chunk shorter than 1', () => {
        const result1 = chunk(['a', 'b', 'c', 'd'], 0);
        const result2 = chunk(['a', 'b', 'c', 'd'], -1);
        expect(result1).to.deep.equal([]);
        expect(result2).to.deep.equal([]);  
    })

    it('Should handle chunk length which is not an integer', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 2.5);
        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']]); 
    })

    it('Should handle an empty array', () => {
        const result = chunk([], 3);
        expect(result).to.deep.equal([]); 
    })

    it('Should handle a null array', () => {
        const result = chunk(null, 3);
        expect(result).to.deep.equal([]); 
    })

    it('Should handle an undefined array', () => {
        const result = chunk(undefined, 3);
        expect(result).to.deep.equal([]); 
    })

    it('Should handle an undefined chunk size', () => {
        const result = chunk(['a', 'b', 'c', 'd'], null);
        expect(result).to.deep.equal([]); 
    })


})