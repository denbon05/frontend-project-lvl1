import getRandom from '../utils.js';
import launchGame from '../index.js';

const getGreatestCommonDivisor = (num1, num2) => {
  const smallestNum = num1 < num2 ? num1 : num2;
  for (let i = smallestNum; i > 0; i -= 1) {
    if (num2 % i === 0 && num1 % i === 0) {
      return i;
    }
  }
  return false;
};

const getGameData = () => {
  const n1 = getRandom();
  const n2 = getRandom();
  const correctAnswer = String(getGreatestCommonDivisor(n1, n2));
  const expression = `${n1} ${n2}`;
  return [correctAnswer, expression];
};

const task = 'Find the greatest common divisor of given numbers.';

const launchGameGSD = () => launchGame(getGameData, task);

export default launchGameGSD;
