import readlineSync from 'readline-sync';
import makeRandomNum from './utils.js';
import gameAskEvenNumbers from './games/brain-even.js';
//import gameCalc from './games/brain-calc.js';

let template = gameAskEvenNumbers;

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

const launchGame = (task) => {
  const name = greetingUser();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const num = makeRandomNum();
    askQuestion(num);
    const userAnswer = usersAnswer();
    const rightAnswer = template(num);
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!')
  }
  userCongratulations(name);
};

export default launchGame;
