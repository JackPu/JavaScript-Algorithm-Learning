// https://leetcode.com/problems/roman-to-integer/description/
// https://en.wikipedia.org/wiki/Roman_numerals
/**
 * example "DCXXI" => 621
 */

module.exports = function (s) {
    const romanLetters = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
   };
   const arr = s.split('');
   let index = 0;
   let num = 0
   let key = ''
   for (let i = 0; i<arr.length; i++) {
       const key = arr[i]
       if(key !== 'V' || key !== 'M') {
            if(romanLetters[key + arr[i+1]]) {
                num += romanLetters[key + arr[i+1]]
                i += 1
                continue
            }
       }
       num += romanLetters[key]
   }
   return num
}
