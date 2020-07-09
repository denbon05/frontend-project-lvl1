import { calculate } from '../src/games/brain-calc';

test('game-calc', () => {
    expect(calculate(5, 13, '+')).toEqual(18);
    expect(calculate(4, 10, '*')).toEqual(40);
});