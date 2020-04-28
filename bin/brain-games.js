#!/usr/bin/env node
import { helloName } from '../src/cli.js';
import { gameAskRandomNumbers} from './brain-even.js';

console.log("Welcome to the Brain Games!");
const name = helloName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameAskRandomNumbers(name);


