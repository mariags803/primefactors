export const getPrimeFactorsFor = (number: number) => {
    if (number < 1) throw new Error('The number must be greater than or equal to one');
    return primeFactors(number);
}

const primeFactors = (number: number) => {
    const prime = findSmallestPrime(number);
    const remainder = number / prime;
    return remainder <= 1 ? [prime] : [prime].concat(getPrimeFactorsFor(remainder));
}

const findSmallestPrime = (number: number) => {
    if (number === 1) return 1;
    let factor = 2;
    while (number % factor !== 0){
        ++factor;
    }
    return factor;
}