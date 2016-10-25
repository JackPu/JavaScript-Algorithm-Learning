var randomString = require('../code/random-string.js');
it('generate an random string', function () {
    let str = randomString(8);
    console.log(str);
    expect(str.length).toEqual(8);
});
