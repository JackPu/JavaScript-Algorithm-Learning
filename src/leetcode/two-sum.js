// https://leetcode.com/problems/two-sum/description/
module.exports = function (nums, target) {
    const arr = nums;
    const keyMap = {};
    let i = 0;
    const l = arr.length;
    for(i; i < l; i++) {
        if (typeof keyMap[target - arr[i]] !== 'undefined') {
            return [keyMap[target - arr[i]], i]
        }
        keyMap[arr[i]] = i;
    }
    return [i, j];
};
