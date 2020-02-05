// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s;
  }
  var palindromicStr = s[0];
  var isPalindrome = function (str) {
      var middle = Math.floor(str.length / 2);
      for (var i = 0 ; i < middle; i ++) {

      }
      return true;
      return str === str.split('').reverse().join('');
  }
  for (var i = 0; i < s.length - 1; i ++) {
    for (var j = i + palindromicStr.length; j < s.length; j ++) {
      var str = s.substring(i, j + 1);
      if (isPalindrome(str) && str.length > palindromicStr.length) {
        palindromicStr = str;
      }
    }
  }
  return palindromicStr;
};