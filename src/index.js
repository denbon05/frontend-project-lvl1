import readlineSync from 'readline-sync';

const launchGame = (templateFunction, correctAnswerOf, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const expression = templateFunction();
    console.log(`Question: ${expression}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = userAnswer === 'yes' || userAnswer === 'no' ? userAnswer : Number(userAnswer);
    const rightAnswer = correctAnswerOf(expression);
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
      Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default launchGame;
