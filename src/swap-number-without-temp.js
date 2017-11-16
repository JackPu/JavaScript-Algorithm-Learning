/**
* swap number withour temp variable
**/

function swap(a , b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}

module.exports = swap;

