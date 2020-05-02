#!/usr/bin/env node
import { usersAnswer, makeRandomNum, askQuestion, greetingUser, compareAnswers, userCongratulations } from '../src/index.js';

const randomNum = (n) => Math.round(Math.random() * n);

const askNumInProgression = () => {
    const name = greetingUser('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        const nums = [];
        const diff = randomNum(5);
        const dotsIndex = randomNum(10);
        let startNum = makeRandomNum();
        let rightAnswer;
        for (let j = 0; j < 10; j += 1) {
            if (dotsIndex === j) {
                nums.push('..');
                startNum = startNum + diff;
                rightAnswer = startNum;
                
            } else {
                startNum = startNum + diff;
                nums.push(startNum);
                
            }
        }
        askQuestion(nums.join(' '));
        if (compareAnswers(Number(usersAnswer()), Number(rightAnswer), name) === false) return;
    }
    userCongratulations(name);
};

export { askNumInProgression };