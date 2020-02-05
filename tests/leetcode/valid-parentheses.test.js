const valid = require('../../src/leetcode/valid-parentheses');

it('Valid Parentheses', function () {
  var input = '()';
  expect(valid(input)).toEqual(true);
  input = '({})';
  expect(valid(input)).toEqual(true);
  input = '([)]';
  expect(valid(input)).toEqual(false);
  input = '()[]{}';
  expect(valid(input)).toEqual(true);
});