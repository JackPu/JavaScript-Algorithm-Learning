// https://leetcode.com/problems/longest-common-prefix/description/
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * input [] => '' ['abc', 'abe', 'abe'] => 'ab'
*/

 const findLongestCommonPrefix = function (strs) {
   if (strs.length === 0) {
        return ''
    }
    const  prefixMap = {}
    let key = ''
    var fn = function (str) {
      for (let i = 0; i < strs.length; i++) {
        if(strs[i].indexOf(str) !== 0) {
          return false
        }
      }
      return true
    }
    let j = 0
    while(key !== strs[0]) {
      const q = (key + strs[0][j++])
      if (!fn(q)) {
        break  
      }
      key = q
    }
    return key;
}
console.log(findLongestCommonPrefix(["a","b"]))


module.exports = findLongestCommonPrefix