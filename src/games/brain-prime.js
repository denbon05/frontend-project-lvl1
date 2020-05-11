import launchGame from '../index.js';
import getRandom from '../utils.js';

const correctAnswerOf = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number !== i) {
      return 'no';
    }
  }
  return 'yes';
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchGamePrime = launchGame(getRandom, correctAnswerOf, task);

export default launchGamePrime;
