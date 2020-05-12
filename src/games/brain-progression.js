import getRandom from '../utils.js';
import launchGame from '../index.js';

const correctAnswerOf = () => {

  const returnNumbers = (startNum = getRandom()) => {
    const nums = [];
    const diff = getRandom(1, 5);
    const randomIndex = getRandom(0, 9);
    for (let i = startNum, j = 0; j < 10; i += diff, j += 1) {
      if (j === randomIndex) {
        nums.push('..');
      } else {
        nums.push(i);
      }
    }
    return nums.join(' ');
  };

  const expression = returnNumbers();
  let dotsIndex;
  const arrExpression = expression.split(' ');
  const res = arrExpression.map((el, indexEl, arr) => {
    let diff;
    if (el === '..') {
      dotsIndex = indexEl;
      if (arr[indexEl + 1] && arr[indexEl + 2]) {
        diff = Number(arr[indexEl + 2]) - Number(arr[indexEl + 1]);
        return Number(arr[indexEl + 1]) - diff;
      }
    }
    diff = Number(arr[indexEl - 1]) - Number(arr[indexEl - 2]);
    return arr[indexEl - 1] + diff;
  });
  return [Number(res[dotsIndex]), expression];
};

const task = 'What number is missing in the progression?';

const launchGameProgression = () => launchGame(correctAnswerOf, task);

export default launchGameProgression;
