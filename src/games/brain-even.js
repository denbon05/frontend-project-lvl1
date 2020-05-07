import makeRandomNum from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameAskEvenNumbers = (num = makeRandomNum()) => num;

const correctAnswerOf = (num) => num % 2 === 0 ? 'yes' : 'no';

export default gameAskEvenNumbers;
export { task, correctAnswerOf };
