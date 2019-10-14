exports.str2ans = (str, func, spliter=' ') => 
    str.split(spliter).map(func).join('');

exports.print = (num, checked, func, str, spliter=' ') => {
    let ans = exports.str2ans(str, func, spliter);
    let random = '';
    let word = '';
    for(let i = 0; i < ans.length; i++) {
        if (i < 10) {
            random += ans[i];
        } else {
            word += ans[i];
        }
    }
    console.log('|', num, '|', random, '|', word, '|', ans, '|', checked, '|');
};

exports.num2alpha = (num) => {
    const ascii = 'a'.charCodeAt(0) + num - 1;
    const alphabet = String.fromCharCode(ascii);
    return alphabet;
};

exports.str2alpha = (str) => 
    exports.num2alpha(parseInt(str));

exports.roman2num = (str) => {
    let temp = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'X' || str[i] =='x') {
            if (temp == 1) {
                count += 9;
                temp = 0;
            } else {
                count += 10;
            }
        } else if (str[i] == 'V' || str[i] == 'v') {
            if (temp == 1) {
                count += 4;
                temp = 0;
            } else {
                count += 5;
            }
        } else {
            temp ++;
        }
    }
    count += temp;
    return count;
};

exports.roman2alpha = (x) => 
    exports.num2alpha(exports.roman2num(x));

exports.phone2alpha = (str) => {
    const phone_code = '____ abc def ghi jkl mno pqrs tuv wxyz'.split(' ');
    return phone_code[parseInt(str[0])-1][str.length-1];
};

exports.caesar2alpha = (caesar) => {
    const caesar_num = caesar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const num = caesar_num > 13 ? caesar_num - 13 : caesar_num + 13;
    return exports.num2alpha(num);
};

