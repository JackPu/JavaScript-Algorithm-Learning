/** https://leetcode.com/problems/valid-parentheses/
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var START_PARENTHESES = ['(', '{', '['];
    var END_PARENTHESES = [')', '}', ']'];
    var startParentheses = [];
    for (var i = 0; i < s.length; i ++) {
      if (START_PARENTHESES.indexOf(s[i]) >= 0) {
        startParentheses.push(s[i]);
        console.log(startParentheses)
      } 
      var len = startParentheses.length;
      var endS = startParentheses[len - 1]
      if (s[i] === ')' && endS === '(') {
        startParentheses.pop();
      } else if (s[i] === '}' && endS === '{') {
        startParentheses.pop();
      } else if (s[i] === ']' && endS === '[') {
        startParentheses.pop();
      } else if (END_PARENTHESES.indexOf(s[i]) > -1) {
        return false;
      }
    }
    return !startParentheses.length;

};