/** bubble sort
* input [1,111,2,12,180,500,-12,0] 
* output [-12,0,1,2,12,111,180,500]
**/
let inputArr = [1,111,2,12,180,500,-12,0];
console.log('Input:[' + arr.join(' ') + ']\n');
function bubbleSort(arr) {
    for(let i = 0,l=arr.length;i<l;i++) {
        for(let j = i;j<l-1;j++) {
            if(arr[i]>arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}

outputArr = bubbleSort(inputArr);
console.log('Output: [' + arr.join(' ') + ']');