import readlineSync from 'readline-sync';

const askRandomNum = () => `Question: ${Math.floor(Math.random() * 100)}`;
const usersAnswer = () => readlineSync.question('Your answer: ');

const gameAskRandomNumbers = (name) => {
    for (let i = 0; i < 3; i += 1) {
        const randomNum = askRandomNum();
        console.log(randomNum);
        const num = Number(randomNum.slice(-2));
        const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
        const answer = usersAnswer();
        if (answer !== rightAnswer) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
            return;
        }
        console.log(`Correct!`);
    }
    return console.log(`Congratulations, ${name}!`);
};

export { gameAskRandomNumbers };