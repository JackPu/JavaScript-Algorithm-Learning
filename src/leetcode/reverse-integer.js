// https://leetcode.com/problems/reverse-integer/description/

/**
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
 */


const reverseInteger = function (num) {
    let isNegative = false;
    if (Math.abs(num) !== num) {
        isNegative = true;
    }
    let numstr = num + '';
    numstr = numstr.replace('-', '');
    const arr = numstr.split('');
    arr.reverse();
    const result = 0 + arr.join('') * (isNegative ? -1 : 1)
    if (result >= (Math.pow(2, 31) - 1) || result <= -Math.pow(2, 31)) {
        return 0;
    }
    return result;
};
module.exports = reverseInteger;
