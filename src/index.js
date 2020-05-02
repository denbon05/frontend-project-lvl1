import { helloName } from '../src/cli.js';
import readlineSync from 'readline-sync';

const usersAnswer = () => {
    const answer = readlineSync.question('Your answer: ');
    return answer;
};

const makeRandomToken = () => {
    const tokens = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * tokens.length);
    return tokens[randomIndex];
};
const makeRandomNum = () => Math.floor(Math.random() * 100);

const askQuestion = (expression) => console.log(`Question: ${expression}`);

const greetingUser = (task) => {
    console.log("Welcome to the Brain Games!");
    const name = helloName();
    console.log(task);
    return name;
};

const compareAnswers = (userAnswer, rightAnswer, userName) => {
    if (userAnswer !== rightAnswer) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
        Let's try again, ${userName}!`);
        return false;
    }
    return console.log('Correct!');
};

const userCongratulations = (name) => console.log(`Congratulations, ${name}!`);

export { usersAnswer, makeRandomNum, askQuestion, greetingUser, makeRandomToken, compareAnswers, userCongratulations };