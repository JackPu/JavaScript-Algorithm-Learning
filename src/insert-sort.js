/** insert sort
*  O(n*n)
**/

function insertSort(arr) {
    for(let i = 1 ,l = arr.length;i<l;i++) {
        let j = i;
        let tem = arr[i];
        while(j>0&&tem<arr[j-1]) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = tem;
    }
    return arr;
}

module.exports = insertSort;