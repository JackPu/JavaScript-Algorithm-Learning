/**
 * https://leetcode.com/problems/two-sum/description/
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 =  9,
 * return [0, 1].
 */
const twoSum = require('../../src/leetcode/two-sum.js');
it('two sum', function () {
    const inputArr = [2, 7, 11, 15];
    const target = 9;
    const output = twoSum(inputArr, target)
    expect(output[0]).toEqual(0);
    expect(output[1]).toEqual(1);
});
