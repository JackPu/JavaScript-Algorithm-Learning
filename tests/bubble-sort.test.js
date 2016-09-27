var bubbleSort = require('../code/bubble-sort.js');
it('Bubble Sort', function () {
    let inputArr = [1,111,2,12,180,500,-12,0];
    let outputArr = bubbleSort(inputArr);
    expect(outputArr).toEqual([-12,0,1,2 ,12,111,180,500]);
});
