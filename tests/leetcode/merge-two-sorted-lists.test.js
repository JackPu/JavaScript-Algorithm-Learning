const removeDuplicates = require('../../src/leetcode/remove-duplicates-from-sorted-array');

it('Remove Duplicates from Sorted Array', function () {
  
  expect(removeDuplicates([1,1,2])).toEqual(2);
  expect(removeDuplicates([1,1,2,2,2])).toEqual(2);
  expect(removeDuplicates([1,1,2,3,4,5,5,6,7,7])).toEqual(7);
});