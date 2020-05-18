import getRandom from '../utils.js';
import launchGame from '../index.js';

const calculate = (num1, num2, token) => {
  switch (token) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${token}'!`);
  }
};

const operators = ['+', '-', '*'];

const getGameData = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [correctAnswer, question];
};

const task = 'What is the result of the expression?';

const launchCalcGame = () => launchGame(getGameData, task);

export default launchCalcGame;
