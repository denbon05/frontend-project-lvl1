#!/usr/bin/env node
import { helloName } from '../src/cli.js';
import { gameCalc, gameAskRandomNumbers } from '../games/brain-calc.js';

console.log("Welcome to the Brain Games!");
const name = helloName();
