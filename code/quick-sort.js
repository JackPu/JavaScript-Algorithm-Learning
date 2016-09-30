/**
* Quick Sort  O(NLogN)
**/ 
function quickSort(arr) {
    
    if(arr.length<=1) {
        return arr;
    }
    
    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for(let i = 1,l=arr.length; i<l; i++) {
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}


module.exports = quickSort;