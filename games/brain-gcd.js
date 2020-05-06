import userCongratulations, {
  usersAnswer, makeRandomNum, askQuestion, greetingUser, compareAnswers,
}
  from '../src/index.js';

const takeNumbersGSD = (n1, n2) => {
  const smallestNum = n1 < n2 ? n1 : n2;
  for (let i = smallestNum; i > 0; i -= 1) {
    if (n2 % i === 0 && n1 % i === 0) {
      return i;
    }
  }
  return false;
};

const askGCD = () => {
  const name = greetingUser('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = makeRandomNum();
    const num2 = makeRandomNum();
    askQuestion(`${num1} ${num2}`);
    const rightAnswer = takeNumbersGSD(num1, num2);
    if (compareAnswers(Number(usersAnswer()), Number(rightAnswer), name) === false) return;
  }
  userCongratulations(name);
};

export default askGCD;
