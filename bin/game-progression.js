import returnNumbers, { task, correctAnswerOf } from '../src/games/brain-progression.js';
import launchGame from '../src/index.js';

const template = returnNumbers;

launchGame(template, correctAnswerOf, task);
