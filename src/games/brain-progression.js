import makeRandomNum, { returnRandomNumWithRange as returnRandomNum } from '../utils.js';

const returnNumbers = (startNum = makeRandomNum()) => {
  const nums = [];
  const diff = returnRandomNum(6);
  const randomIndex = returnRandomNum(10);
  for (let i = startNum, j = 0; j < 10; i += diff, j += 1) {
    if (j === randomIndex) {
      nums.push('..');
    } else {
      nums.push(i);
    }
  }
  return nums.join(' ');
};

const correctAnswerOf = (expression) => {
  const arrExpression = expression.split(' ');
  const res = arrExpression.map((el, indexEl,arrExpression) => {
    let diff;
    if (el === '..') {
      if (arrExpression[indexEl + 1] && arrExpression[indexEl + 2]) {
        diff = Number(arrExpression[indexEl + 2]) - Number(arrExpression[indexEl + 1]);
        return Number(arrExpression[indexEl + 1]) - diff;
      } else {
        diff = Number(arrExpression[indexEl - 1]) - Number(arrExpression[indexEl - 2]);
        return arrExpression[indexEl - 1] + diff;
      }
    }
  });
  return Number(res.join(''));
};

const task = 'What number is missing in the progression?';

export default returnNumbers;
export { correctAnswerOf, task };
