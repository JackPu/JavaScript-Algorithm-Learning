/**
* knapsack https://zh.wikipedia.org/wiki/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98
**/
function knapsack(capacity,size,value,n) {
    let l = arr.length;
    let gap = l >> 1;
    
    while(gap>0) {
        for(let i = gap;i<l;i++) {
            let tem = arr[i];
            let j = i - gap; 
            for(;j>=0&&tem<arr[j];j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = tem;
        }
        gap = gap >> 1;
    }
    
    return arr;
    
}

module.exports = knapsack;

