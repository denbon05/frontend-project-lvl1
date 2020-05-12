import getRandom from '../utils.js';
import launchGame from '../index.js';

const correctAnswerOf = () => {

  const return2ValuesForGCD = (
    randomNum1 = getRandom(), randomNum2 = getRandom(),
  ) => `${randomNum1} ${randomNum2}`;

  const expression = return2ValuesForGCD();
  const valuesOfExpression = expression.split(' ');
  const n1 = valuesOfExpression[0];
  const n2 = valuesOfExpression[1];
  const smallestNum = n1 < n2 ? n1 : n2;
  for (let i = smallestNum; i > 0; i -= 1) {
    if (n2 % i === 0 && n1 % i === 0) {
      return [i, expression];
    }
  }
  return [false, expression];
};

const task = 'Find the greatest common divisor of given numbers.';

const launchGameGSD = () => launchGame(correctAnswerOf, task);

export default launchGameGSD;
