const lib = require('./lib.js');

console.log('| # | random | word | passcode | checked |');
console.log('| - | ------ | ---- | -------- | ------- |');

lib.print( 0, 'v', lib.roman2alpha,      'I XXVI XVI XIII VII IV XVI XV X V XIX XX XVIII IX III XX');
lib.print( 1, ' ', lib.phone2alpha,      '3 444 9 4 888 5 88 7 7 5 7777 44 2 222 55 555 33 3');
lib.print( 2, ' ', lib.phone2alpha,      '777 3 5 88 8 333 66 2 6 222 7777 33 8 8 444 66 4');
lib.print( 3, 'x', x => x.toLowerCase(), 'CYDRXOQWURMECHANISM', ''); //GL dancing-men https://fonts2u.com/gl-dancingmen.font
lib.print( 4, ' ', lib.phone2alpha,      '222 4 4 88 88 9999 7 777 9999 999 3 33 4 2 7777');
lib.print( 5, 'v', lib.str2alpha,        '23 16 8 4 26 22 6 2 22 7 14 9 20 16 9 3 11');
lib.print( 6, 'v', lib.roman2alpha,      'II XXI XII I XXIV IV XIV IV XVI III XIII IX XIV IX XIX XX XVIII XXV');
lib.print( 7, ' ', lib.phone2alpha,      '3 66 88 77 7 88 99 44 99 8 666 11 88 3 33');
lib.print( 8, ' ', lib.caesar2alpha,     'paihaxbzitpbaprcgvba', '');
lib.print( 9, ' ', x => x, 'todo');
lib.print(10, ' ', lib.caesar2alpha,     'zrfawelfpyvanaryl', '');
lib.print(11, ' ', lib.phone2alpha,      '7 88 5 5 66 99 88 666 22 22 3 33 33 5 2 999');
lib.print(12, ' ', lib.caesar2alpha,     'eqmqkejkuaunezyrff', '');
lib.print(13, 'v', lib.roman2alpha,      'XXIV VI XI IV XXI XXIV VIII IX XVI III XIV XV XXII V XII');
lib.print(14, ' ', lib.phone2alpha,      '88 6 999 22 666 7777 444 555 55 333 9 2 777 33 44 666 88 7777 33 6 2 66');
lib.print(15, ' ', lib.caesar2alpha,     'rvytcmvfykrhcubal', '');
lib.print(16, ' ', x => x, 'todo');
lib.print(17, ' ', lib.phone2alpha,      '7 333 111 4 99 22 88 66 66 11 333 7 777 777 3 4 555 7 666 33');
lib.print(18, ' ', lib.phone2alpha,      '9 6 888 77 5 999 77 99 7 4 55 66 444 8 8 444 6 4');
lib.print(19, 'v', lib.str2alpha,        '14 16 10 13 24 21 2 2 12 9 16 15 16 16 9 5 19');
lib.print(20, ' ', lib.caesar2alpha,     'aohrabarmdpbfghzr', '');
lib.print(21, 'v', lib.roman2alpha,      'XV V XV IV VII II III IV IX XII II I XII XII I IV V');
lib.print(22, 'v', lib.roman2alpha,      'XXII I XII XVI XI XXIV II XXI III VI VI IX XII II V XVIII XX');

