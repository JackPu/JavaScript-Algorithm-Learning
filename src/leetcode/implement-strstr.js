// https://leetcode.com/problems/implement-strstr/

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  for (var i = 0; i <= haystack.length; i ++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) {
          return i;
      }  
      var str = haystack.substr(i, needle.length);
      if (str === needle) {
        return i;
      }
    }
  }  

  return -1;
};