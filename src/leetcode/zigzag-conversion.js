// https://leetcode.com/problems/zigzag-conversion/

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

var convert = function(s, numRows) {
  if (numRows === 1) {
      return s;
  }
  var a = new Array(numRows);
  var index = 0;
  var sign = true;
  for (var i = 0; i < s.length; i ++) {
    if (!a[i % numRows]) {
      a[i % numRows] = [];
    }
    if (index === 0) {
      sign = true;
    } else if (index === numRows - 1) {
      sign = false;
    }
    if (sign) {
      a[index++].push(s[i]);
    } else {
      a[index--].push(s[i]);
    }
  }
  var resultArr = [];
  for (var j = 0; j < numRows; j ++){
    resultArr = resultArr.concat(a[j]);
  }
  return resultArr.join('');
};