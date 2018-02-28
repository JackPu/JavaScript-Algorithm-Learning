const getResult = require('../src/qipan.js');
it('qipan problem', function () {

    const result = getResult('x',[
        ['o', 'e', 'e'],
        ['o', 'x', 'o'],
        ['x', 'x', 'e']
    ]);
    expect(result.length).toEqual(3);
    expect(result[0][0]).toEqual(0);
    expect(result[0][1]).toEqual(1);
    expect(result[1][0]).toEqual(0);
    expect(result[1][1]).toEqual(2);
    const result2 = getResult('x',[
        ['x', 'o', 'o'],
        ['x', 'x', 'e'],
        ['e', 'o', 'e']
    ]);
    expect(result[2][0]).toEqual(2);
    expect(result[2][1]).toEqual(2);

});
