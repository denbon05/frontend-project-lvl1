import getRandom from '../utils.js';
import launchGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAnswerOf = () => {

  const num = getRandom();

  const result = num % 2 === 0 ? 'yes' : 'no';
  return [result, num];
};

const launchGameEven = () => launchGame(correctAnswerOf, task);

export default launchGameEven;
