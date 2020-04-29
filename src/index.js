import { helloName } from '../src/cli';

const usersAnswer = () => {
    const answer = readlineSync.question('Your answer: ');
    return answer;
};

const sharedArchitecture = (questionValue, rightAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = helloName();

    console.log('Question: ' + questionValue);
    const answer = usersAnswer();
    if (answer !== rightAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
    Let's try again, ${name}`);
    return; 
    }
    
    return console.log('Correct!');
};

export { sharedArchitecture, usersAnswer };