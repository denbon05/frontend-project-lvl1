import makeRandomNum, {  returnRandomNumWithRange as returnRandomNum } from '../utils.js';

const gameCalc = (randomNum1 = makeRandomNum(), randomNum2 = makeRandomNum()) => {
  const tokens = ['+', '-', '*'];
  const randomToken = tokens[returnRandomNum(tokens.length)];
  return `${randomNum1} ${randomToken} ${randomNum2}`;
};

const correctAnswerOf = (expression) => {
  const arrOfExpression = expression.split(' ');
  switch (arrOfExpression[1]) {
    case '+':
      return Number(arrOfExpression[0]) + Number(arrOfExpression[2]);
    case '-':
      return Number(arrOfExpression[0]) - Number(arrOfExpression[2]);
    case '*':
      return Number(arrOfExpression[0]) * Number(arrOfExpression[2]);
  }
};

const task = 'What is the result of the expression?';

export default gameCalc;
export { task, correctAnswerOf };
