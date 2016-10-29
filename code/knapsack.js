/**
 * knapsack https://zh.wikipedia.org/wiki/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98
 **/
function knapsack(capacity, size, value, n) {
  var K = [];
  for (let i = 0; i <= n; i++) {
    K[i] = [];
  }
  for (let j = 0; j <=  n; j++) {
    for(let w=0;w<=capacity;w++) {
      if(j==0 || w==0) {
        K[j][w] = 0;
      }else if(size[j-1] <= w) {
        K[j][w] = Math.max(value[j-1] + K[j-1][w-size[j-1]],K[j-1][w]);
      }else {
        K[j][w] = K[j-1][w];
      }
      
      
    }  
  }
  
  return K[n][capacity];

}

module.exports = knapsack;