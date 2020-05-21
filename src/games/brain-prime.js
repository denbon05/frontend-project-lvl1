import launchGame from '../index.js';
import getRandom from '../utils.js';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandom();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchGamePrime = () => launchGame(getGameData, task);

export default launchGamePrime;
