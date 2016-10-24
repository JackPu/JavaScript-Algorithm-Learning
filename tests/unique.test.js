let unique = require('../code/unique.js');
it('unique an array ', function () {
    let inputArr = [1,13,24,11,11,14,1,2];
    expect(unique(inputArr)).toEqual([1,13,24,11,14,2]);
});
