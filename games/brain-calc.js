import { usersAnswer, makeRandomNum, askQuestion, greetingUser, makeRandomToken, compareAnswers, userCongratulations } from '../src/index.js';

const gameCalc = () => {
    const name = greetingUser('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const num1 = makeRandomNum();
        const num2 = makeRandomNum();
        const token = makeRandomToken();
        askQuestion(`${num1} ${token} ${num2}`);
        if (compareAnswers(Number(usersAnswer()), Number(eval(num1 + token + num2)), name) === false) return;
    }
    userCongratulations(name);
};
gameCalc();
export { gameCalc };