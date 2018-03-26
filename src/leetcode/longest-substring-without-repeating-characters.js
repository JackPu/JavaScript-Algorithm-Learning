// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


const lengthOfLongestSubstring = function(str) {
    var str  = "dvdf"; // abc
    let i = 0;
    let maxSubstring = str[i];
    let currentMaxString = str[i];
    let position = 0;
    for(let j = 1; j < str.length; j++){
        if(currentMaxString.indexOf(str[j]) >= 0) {
            i = currentMaxString.indexOf(str[j]) + 1 + position;
            if (currentMaxString.length > maxSubstring.length) {
                maxSubstring = currentMaxString;
            }
            if (i ===  j) {
                currentMaxString = str[j];
            } else {
                currentMaxString = str.substring(i, j);
                str = str.substr(i);
            }
            continue;
        }
        currentMaxString += str[j];
        maxSubstring = currentMaxString;
    }
    return maxSubstring;
};
lengthOfLongestSubstring()
module.exports = lengthOfLongestSubstring;
