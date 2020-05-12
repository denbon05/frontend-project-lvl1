import getRandom from '../utils.js';
import launchGame from '../index.js';

const correctAnswerOf = () => {
  const getExpression = (randomNum1 = getRandom(), randomNum2 = getRandom()) => {
    const tokens = ['+', '-', '*'];
    const randomToken = tokens[getRandom(0, tokens.length - 1)];
    return `${randomNum1} ${randomToken} ${randomNum2}`;
  };

  const expression = getExpression();
  const arrOfExpression = expression.split(' ');
  switch (arrOfExpression[1]) {
    case '+':
      return [Number(arrOfExpression[0]) + Number(arrOfExpression[2]), expression];
    case '-':
      return [Number(arrOfExpression[0]) - Number(arrOfExpression[2]), expression];
    case '*':
      return [Number(arrOfExpression[0]) * Number(arrOfExpression[2]), expression];
    default:
      return [null, expression];
  }
};

const task = 'What is the result of the expression?';

const launchCalcGame = () => launchGame(correctAnswerOf, task);

export default launchCalcGame;
