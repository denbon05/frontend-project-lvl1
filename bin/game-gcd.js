import gameCalc, { task, correctAnswerOf } from '../src/games/brain-gcd.js';
import launchGame from '../src/index.js';

const template = gameCalc;

launchGame(template, correctAnswerOf, task);
