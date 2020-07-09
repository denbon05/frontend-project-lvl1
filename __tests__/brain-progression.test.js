import { makeProgression } from '../src/games/brain-progression';

test('makeProgression', () => {
    const progression = makeProgression(5, 5, 10);
    expect(progression.length).toEqual(10);
    expect(progression[2]).toEqual(15);
});