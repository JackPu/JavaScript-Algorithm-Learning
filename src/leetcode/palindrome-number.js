// https://leetcode.com/problems/palindrome-number/description/

// examples:123 false 121 true

module.exports = function (x) {
    if (x < 0) {
        return false;
    }
    var m = x;
    var n = 0;
    while(m > 0) {
        n = (m % 10 + n * 10)
        m = Math.floor(m / 10)
    }
    return n === x
}
