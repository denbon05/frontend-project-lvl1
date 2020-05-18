import getRandom from '../utils.js';
import launchGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const questedNumber = getRandom();

  const correctAnswer = isEven(questedNumber) ? 'yes' : 'no';
  return [correctAnswer, questedNumber];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
