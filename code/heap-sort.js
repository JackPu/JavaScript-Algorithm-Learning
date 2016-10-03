/**
 * heap sort  O(nlogn) https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F
 **/
function heapSort(arr) {
  // set the parent target and children target
  let maxHelpify = function(arr, start, end) {
    let dad = start;
    let son = 2 * dad + 1;
    while (son <= end) {
      if (son + 1 <= end && arr[son] < arr[son + 1]) {
        son++;
      }
      if (arr[dad] > arr[son]) {
        return;
      } else {
        let tem = arr[son];
        arr[son] = arr[dad];
        arr[dad] = tem;
        dad = son;
        son = dad*2 +1;
      }
    }
  }
  
  let len = arr.length;
  for(let i = Math.floor(len / 2 - 1);i>=0;i--){
    maxHelpify(arr,i,len - 1);
  }
  for(let i = len - 1; i>0; i--) {
    let tem = arr[i];
    arr[i] = arr[0];
    arr[0] = tem;
    maxHelpify(arr,0,i - 1);
  }

  return arr;
  
}


module.exports = heapSort;