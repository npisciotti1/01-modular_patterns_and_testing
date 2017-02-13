'use strict';

const greet = require('./lib/greet.js');

if(process.argv[2]) var name = process.argv[2];
if(process.argv[2] === undefined) var name = 'Carne Asuhdude';

greet.greeting(name);
greet.goodbye();
