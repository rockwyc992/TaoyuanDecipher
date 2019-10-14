const lib = require('./lib.js');

console.log('| # | random | word | passcode | checked |');
console.log('| - | ------ | ---- | -------- | ------- |');

lib.print( 0, 'v', lib.roman2alpha,      'I XXVI XVI XIII VII IV XVI XV X V XIX XX XVIII IX III XX');
