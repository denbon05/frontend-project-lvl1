import getRandom from '../utils.js';
import launchGame from '../index.js';

const calc2Nums = (num1, num2, token) => {
  switch (token) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const randomNum1 = getRandom();
  const randomNum2 = getRandom();
  const tokens = ['+', '-', '*'];
  const randomToken = tokens[getRandom(0, tokens.length - 1)];
  const expression = `${randomNum1} ${randomToken} ${randomNum2}`;
  const correctAnswer = String(calc2Nums(randomNum1, randomNum2, randomToken));
  return [correctAnswer, expression];
};

const task = 'What is the result of the expression?';

const launchCalcGame = () => launchGame(getGameData, task);

export default launchCalcGame;
