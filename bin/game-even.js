import makeRandomNum from '../src/utils.js';
import { task, correctAnswerOf } from '../src/games/brain-even.js';
import launchGame from '../src/index.js';

const template = makeRandomNum;

launchGame(template, correctAnswerOf, task);
