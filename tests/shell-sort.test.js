var inserSort = require('../code/shell-sort.js');
it('Shell Sort', function () {
    let inputArr = [1,111,2,12,180,500,-12,0];
    let outputArr = inserSort(inputArr);
    expect(outputArr).toEqual([-12,0,1,2 ,12,111,180,500]);
});
