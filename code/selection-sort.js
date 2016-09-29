/**
* Selection Sort 
**/
function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++) {
        let min = arr[i];
        for(let j= i+1;j<arr.length;j++) {
            if(min>arr[j]) {
                let tem = min;
                min = arr[j];
                arr[j] = tem;
            }
        }
        arr[i] = min;
    }
    return arr;
}

module.exports = selectionSort;