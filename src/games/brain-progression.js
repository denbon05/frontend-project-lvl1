import getRandom from '../utils.js';
import launchGame from '../index.js';

const makeProgression = (firstNum, difference, progressionLength) => {
  const progresion = [];
  for (let i = firstNum; progresion.length < progressionLength; i += difference) {
    progresion.push(i);
  }
  return progresion;
};

const getGameData = () => {
  const progressionLength = 10;
  const difference = getRandom(1, 5);
  const firstNum = getRandom();
  const progression = makeProgression(firstNum, difference, progressionLength);
  const hiddenElementIndex = getRandom(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [String(correctAnswer), question];
};

const task = 'What number is missing in the progression?';

const launchGameProgression = () => launchGame(getGameData, task);

export default launchGameProgression;
export { makeProgression };
