const heapSort = require('../src/heap-sort.js');
it('Insert Sort', function () {
    const inputArr = [1,111,2,12,180,500,-12,0];
    const outputArr = heapSort(inputArr);
    expect(outputArr).toEqual([-12,0,1,2 ,12,111,180,500]);
});
