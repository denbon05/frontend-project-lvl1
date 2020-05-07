import makeRandomNum from '../utils.js';

const return2ValuesForGCD = (randomNum1 = makeRandomNum(), randomNum2 = makeRandomNum()) => {
  return `${randomNum1} ${randomNum2}`;
};

const correctAnswerOf = (expression) => {
  const valuesOfExpression = expression.split(' ');
  const n1 = valuesOfExpression[0];
  const n2 = valuesOfExpression[1]
  const smallestNum = n1 < n2 ? n1 : n2;
  for (let i = smallestNum; i > 0; i -= 1) {
    if (n2 % i === 0 && n1 % i === 0) {
      return i;
    }
  }
  return false;
};

const task = 'Find the greatest common divisor of given numbers.';

export default return2ValuesForGCD;
export { task, correctAnswerOf };
