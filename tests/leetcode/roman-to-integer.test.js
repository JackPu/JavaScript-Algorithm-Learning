const romanToInteger = require('../../src/leetcode/roman-to-integer');
it('Roman to Integer', function () {
    expect(romanToInteger('DCXXI')).toEqual(621);
    expect(romanToInteger("MCMXCVI")).toEqual(1996);
    expect(romanToInteger("MDCCCLXXXIV")).toEqual(1884)
});
