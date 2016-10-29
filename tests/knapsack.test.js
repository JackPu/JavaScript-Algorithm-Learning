var knapsack = require('../code/knapsack.js');
it('knapsack problems', function () {
    let capcity = 16;
    let sizes = [3,4,7,8,9];
    let values = [4,5,10,11,13];
    
    expect(knapsack(capcity,sizes,values,5)).toEqual(23);
});
