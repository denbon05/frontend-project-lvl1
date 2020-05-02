#!/usr/bin/env node
import { helloName } from '../src/cli.js';
import { gameCalc } from '../games/brain-calc.js';
import { gameAskEvenNumbers } from '../games/brain-even.js';
import { askGCD } from '../games/brain-gcd.js';
import { askNumInProgression } from '../games/brain-progression.js';
import { askPrimeNumber } from '../games/brain-prime.js';

//console.log("Welcome to the Brain Games!");
//helloName();

gameCalc();
gameAskEvenNumbers();
askGCD();
askNumInProgression();
askPrimeNumber();