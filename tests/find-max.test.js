var findMax = require('../code/find-max.js');
it('Find the maximum value in an array', function () {
    let inputArr = [1,111,2,12,180,500,-12,0];
    let max = findMax(inputArr);
    expect(max).toEqual(500);
});
