var swap = require('../code/swap-number-without-temp.js');
it('Shell Sort', function () {
    let inputArr = [1,111];
    
    expect(swap(inputArr[0],inputArr[1])).toEqual([111,1]);
});
