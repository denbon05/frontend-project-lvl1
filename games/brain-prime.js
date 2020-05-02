#!/usr/bin/env node
import { usersAnswer, makeRandomNum, askQuestion, greetingUser, compareAnswers, userCongratulations } from '../src/index.js';

const isPrimeNumber = (number) => {
    if (number < 2) return false;
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0 && number !== i) {
            return false;
        }
    }
    return true;
};

const askPrimeNumber = () => {
    const name = greetingUser('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const num = makeRandomNum();
        askQuestion(num);
        const rightAnswer = isPrimeNumber(num) ? 'yes' : 'no';
        if (compareAnswers(usersAnswer(), rightAnswer, name) === false) return;
    }
    userCongratulations(name);
};

export { askPrimeNumber };