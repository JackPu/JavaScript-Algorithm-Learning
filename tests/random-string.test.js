const randomString = require('../src/random-string.js');
it('generate an random string', function () {
    const str = randomString(8);
    expect(str.length).toEqual(8);
});
