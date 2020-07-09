import { getGreatestCommonDivisor } from '../src/games/brain-gcd';

test('greatest common divisor', () => {
    expect(getGreatestCommonDivisor(27, 9)).toEqual(9);
});