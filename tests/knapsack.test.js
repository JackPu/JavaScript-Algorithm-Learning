const knapsack = require('../src/knapsack.js');
it('knapsack problems', function () {
    const capcity = 16;
    const sizes = [3,4,7,8,9];
    const values = [4,5,10,11,13];

    expect(knapsack(capcity,sizes,values,5)).toEqual(23);
});
