import getRandom from '../utils.js';
import launchGame from '../index.js';

const progressionLength = 10;

const getNumsProgression = () => {
  const nums = [];
  const difference = getRandom(1, 5);
  const firstNum = getRandom();
  for (let i = firstNum, j = 1; j <= progressionLength; i += difference, j += 1) {
    nums.push(i);
  }
  return nums;
};

const getGameData = () => {
  const progression = getNumsProgression();
  const dotsIndex = getRandom(0, progressionLength - 1);
  let correctAnswer;
  const progressionWidthDots = progression.map((num, index) => {
    if (dotsIndex === index) {
      correctAnswer = num;
      return '..';
    }
    return num;
  });
  const expression = progressionWidthDots.join(' ');
  return [String(correctAnswer), expression];
};

const task = 'What number is missing in the progression?';

const launchGameProgression = () => launchGame(getGameData, task);

export default launchGameProgression;
