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

export { task, correctAnswerOf };