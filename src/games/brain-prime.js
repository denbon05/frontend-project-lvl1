import launchGame from '../index.js';
import getRandom from '../utils.js';

const correctAnswerOf = () => {
  const number = getRandom();
  if (number < 2) return [false, number];
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== i) {
      return ['no', number];
    }
  }
  return ['yes', number];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchGamePrime = () => launchGame(correctAnswerOf, task);

export default launchGamePrime;
