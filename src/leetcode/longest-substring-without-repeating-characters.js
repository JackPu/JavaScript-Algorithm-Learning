// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  if (!s) {
      return 0;
  }
  var i = 0;
  var maxs = s[0];
  if (s.length === 1) {
    return s.length;
  }
  var temp = s[0]
  for (var i = 1; i < s.length; i ++) {
    if (temp.indexOf(s[i]) === -1) {
      temp += s[i];
    } else {
      if (maxs.length < temp.length) {
        maxs = temp;
      }
      i = i - temp.length + 1;
      temp = s[i];
    }
  }
  if (maxs.length < temp.length) {
      maxs = temp;
  }
  return maxs.length;
};
