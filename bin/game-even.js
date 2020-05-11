import getRandom from '../src/utils.js';
import { task, correctAnswerOf } from '../src/games/brain-even.js';
import launchGame from '../src/index.js';

const template = getRandom;

launchGame(template, correctAnswerOf, task);
