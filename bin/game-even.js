import gameAskEvenNumbers, { task, correctAnswerOf } from '../src/games/brain-even.js';
import launchGame from '../src/index.js';

const template = gameAskEvenNumbers;

launchGame(template, correctAnswerOf, task);
