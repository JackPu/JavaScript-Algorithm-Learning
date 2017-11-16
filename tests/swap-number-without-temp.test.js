const swap = require('../src/swap-number-without-temp.js');
it('Shell Sort', function () {
    const inputArr = [1,111];

    expect(swap(inputArr[0],inputArr[1])).toEqual([111,1]);
});
