import readlineSync from 'readline-sync';

const helloName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const usersAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const askQuestion = (expression) => console.log(`Question: ${expression}`);

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = helloName();
  return name;
};

const userCongratulations = (name) => console.log(`Congratulations, ${name}!`);

const launchGame = (templateFunction, correctAnswerOf, task) => {
  const name = greetingUser();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const expression = templateFunction();
    askQuestion(expression);
    let userAnswer = usersAnswer();
    userAnswer = userAnswer === 'yes' || userAnswer === 'no' ? userAnswer : Number(userAnswer);
    const rightAnswer = correctAnswerOf(expression);
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
      Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!')
  }
  userCongratulations(name);
};

export default launchGame;
