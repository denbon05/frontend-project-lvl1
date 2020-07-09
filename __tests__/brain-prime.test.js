import { isPrime } from '../src/games/brain-prime';

test('isPrime', () => {
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(10)).toBeFalsy();
});