import launchGame from '../index.js';
import getRandom from '../utils.js';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0 && n !== i) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandom();
  return isPrime(number) ? ['yes', number] : ['no', number];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchGamePrime = () => launchGame(getGameData, task);

export default launchGamePrime;
