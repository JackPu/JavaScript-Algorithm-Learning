// https://leetcode.com/problems/two-sum/description/
module.exports = function (nums, target) {
    const arr = nums;
    let i = 0;
    let j = arr.length - 1;
    while(arr[i] + arr[j] !== target) {
        const val = arr[i] + arr[j];
        if (val < target) {
            i += 1;
        }else if(val > target) {
            j -= 1;
        }
    }
    return [i, j];
};
