import getRandom from '../utils.js';
import launchGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const numberAsked = getRandom();

  const correctAnswer = isEven(numberAsked) ? 'yes' : 'no';
  return [correctAnswer, numberAsked];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
