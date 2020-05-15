import getRandom from '../utils.js';
import launchGame from '../index.js';

const getNumsProgression = () => {
  const nums = [];
  const diff = getRandom(1, 5);
  const countNums = 10;
  const randomIndex = getRandom(0, countNums - 1);
  const startNum = getRandom();
  let numInstedDots;
  for (let i = startNum, j = 1; j <= countNums; i += diff, j += 1) {
    if (j === randomIndex) {
      nums.push('..');
      numInstedDots = i;
    } else {
      nums.push(i);
    }
  }
  return [nums, numInstedDots];
};

const getGameData = () => {
  const [numsbersProgression, correctAnswer] = getNumsProgression();
  const expression = numsbersProgression.join(' ');
  return [String(correctAnswer), expression];
};

const task = 'What number is missing in the progression?';

const launchGameProgression = () => launchGame(getGameData, task);

export default launchGameProgression;
