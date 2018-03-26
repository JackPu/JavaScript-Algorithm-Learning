const reverseInteger = require('../../src/leetcode/reverse-integer');
it('two sum', function () {
    expect(reverseInteger(123)).toEqual(321);
    expect(reverseInteger(-123)).toEqual(-321);
});
