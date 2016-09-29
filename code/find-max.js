/**
 * find max value in an array O(n);
 **/
function findMax(arr) {
    if(arr.length==1) {
        return arr[0];
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

module.exports = findMax;