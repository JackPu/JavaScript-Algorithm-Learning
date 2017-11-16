const findMaxDuplicateChar = require('../src/find-the-max-duplicate-char.js');
it('findMaxDuplicateChar', function () {
    const str = 'afjghdfraaaasdenas ';
    expect(findMaxDuplicateChar(str)).toEqual('a');
});
