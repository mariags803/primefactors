import {getPrimeFactorsFor} from "../primeFactors";

describe('The prime factor function', () => {
    it("only accepts positive numbers", () => {
        expect(() => getPrimeFactorsFor(-5)).toThrow('The number must be greater than or equal to one');
    });
    it("knows that one is prime", () => {
        expect(getPrimeFactorsFor(1)).toEqual([1]);
    });
    it("recognizes prime numbers", () => {
        expect(getPrimeFactorsFor(2)).toEqual([2]);
        expect(getPrimeFactorsFor(3)).toEqual([3]);
    });
    it("calculates all the prime factors of a number", () => {
        expect(getPrimeFactorsFor(8)).toEqual([2, 2, 2]);
    });
    it("sorts the result in ascending order", () => {
        expect(getPrimeFactorsFor(24)).toEqual([2,2,2,3]);
    });
});
