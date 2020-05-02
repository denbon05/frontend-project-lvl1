#!/usr/bin/env node
import { usersAnswer, makeRandomNum, askQuestion, greetingUser, compareAnswers, userCongratulations } from '../src/index.js';

const gameAskEvenNumbers = () => {
    const name = greetingUser('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNum = makeRandomNum();
        askQuestion(randomNum);
        const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
        const userAnswer = usersAnswer();
        if (compareAnswers(userAnswer, rightAnswer, name) === false) return;
    }
    userCongratulations(name);
};

export { gameAskEvenNumbers };