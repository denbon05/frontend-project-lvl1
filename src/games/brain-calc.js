import getRandom from '../utils.js';
import launchGame from '../index.js';

const gameCalc = (randomNum1 = getRandom(), randomNum2 = getRandom()) => {
  const tokens = ['+', '-', '*'];
  const randomToken = tokens[getRandom(0, tokens.length - 1)];
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
    default:
      return null;
  }
};

const task = 'What is the result of the expression?';

const launchCalcGame = launchGame(gameCalc, correctAnswerOf, task);

export default launchCalcGame;
