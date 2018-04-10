const fn = require('../../src/leetcode/longest-common-prefix');
it('longest common prefix', function () {
    expect(fn([])).toEqual('');
    expect(fn(['a', 'b'])).toEqual('');
   expect(fn(['ab', 'abc'])).toEqual('ab');
});
