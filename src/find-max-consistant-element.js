/** find the max value in an consistant element in an array
* input: [1,1,2,4,-5,12,-3,1]
* output: 15
**/

function findMaxConsitantElement(a) {
  let max = 0;
  let t = [];
  for(var i = 0;i<a.length;i++) {
    t[i] = [];
    t[i][0] = a[i];
    if(t[i][0]>max) {
      max = t[i][0];
    }
    for(var j = i+1;j<a.length;j++) {
      t[i][j] = t[i][j-1] + a[j];
      if(t[i][j]>max) {
        max = t[i][j];
      }
    }
  }

  return max;
  
}

module.exports = findMaxConsitantElement;