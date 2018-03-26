const check = require('../../src/leetcode/palindrome-number');
it('palindrome-number', function () {
    expect(check(123)).toEqual(false);
    expect(check(1)).toEqual(true);
    expect(check(11)).toEqual(true);
});
