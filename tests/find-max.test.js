const findMax = require('../src/find-max.js');
it('Find the maximum value in an array', function () {
    const inputArr = [1,111,2,12,180,500,-12,0];
    const max = findMax(inputArr);
    expect(max).toEqual(500);
});
