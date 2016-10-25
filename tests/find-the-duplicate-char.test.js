var findMaxDuplicateChar = require('../code/find-the-max-duplicate-char.js');
it('findMaxDuplicateChar', function () {
    let str = 'afjghdfraaaasdenas ';
    expect(findMaxDuplicateChar(str)).toEqual('a');
});
