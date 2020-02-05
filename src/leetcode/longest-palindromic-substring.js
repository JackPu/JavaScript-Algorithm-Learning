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
// var longestPalindrome = function(s) {
//   if (s.length <= 1) {
//     return s;
//   }
//   var palindromicStr = s[0];
//   var isPalindrome = function (str) {
//       var len = str.length; 
//       var middle = Math.floor(len / 2);
//       for (var i = 0 ; i < middle; i ++) {
//         if (str[i] !== str[len - i - 1]) {
//           return false;
//         }
//       }
//       return true;
//   }
//   for (var i = 0; i < s.length - 1; i ++) {
//     for (var j = i + palindromicStr.length; j < s.length; j ++) {
//       var str = s.substring(i, j + 1);
//       if (isPalindrome(str) && str.length > palindromicStr.length) {
//         palindromicStr = str;
//       }
//     }
//   }
//   return palindromicStr;
// };

// var longestPalindrome = function(s) {
//   if (s.length <= 1) {
//     return s;
//   }
//   var palindromicStr = s[0];
//   var isPalindrome = function (str) {
//       var len = str.length; 
//       var middle = Math.floor(len / 2);
//       for (var i = 0 ; i < middle; i ++) {
//         if (str[i] !== str[len - i - 1]) {
//           return false;
//         }
//       }
//       return true;
//   }
//   for (var i = 0; i < s.length; i ++) {
//     var subs = s.substr(i, s.length);
//     if (subs.length < palindromicStr.length) {
//         return palindromicStr;
//     }
//     for(var j=subs.length; j>=0; j--) {
//       var subSubs = subs.substr(0, j);
//       if (subSubs.length <= 1 || subSubs.length < palindromicStr.length) {
//         continue;
//       }
//       if (isPalindrome(subSubs) && subSubs.length > palindromicStr.length) {
//         palindromicStr = subSubs;
//       }
//     }
//   }
//   return palindromicStr;
// };
var longestPalindrome = function(s)  {
  if(!s || s.length <= 1) {
    return s
  }
  var expand = function (s, begin, end) {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--
      end++
    }
    return s.substring(begin + 1, end)
  }
  var palindromicStr = s[0];
  for(let i = 0; i < s.length; i++) {
    var temp = expand(s, i, i)
    if(temp.length > palindromicStr.length) {
      longest = temp
    }
    temp = expand(s, i, i + 1)
    if(temp.length > palindromicStr.length) {
      palindromicStr = temp
    }
  }
  return palindromicStr
}

