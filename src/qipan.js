/**
假设我们现在有一个 3 x 3 的井字棋游戏，我们用一个二维数组代表棋盘，’x’ 代表玩家 X 下的棋子，’o’ 代表玩家 O 下的棋子，’e’ 代表该格没有棋子。例如：

一个空白的棋盘以下面的二维数组表示
[ [‘e’, ‘e’, ‘e’],
  [‘e’, ‘e’, ‘e’],
  [‘e’, ‘e’, ‘e’] ]

如果玩家 X 在第一行第一列下了一步棋，玩家 O 在第二行第二列下了一步棋，则表示如下：
[ [‘x’, ‘e’, ‘e’],
  [‘e’, ‘o’, ‘e’],
  [‘e’, ‘e’, ‘e’] ]

现在需要一个 function，接受一个已有任意棋子的棋盘（和上面二维数组一样的格式），和玩家的标志（’x’ 或 ‘o'），返回该玩家下一步有几种可能的获胜方式（获胜方式以数组表示，[0, 0] 代表在第一行第一列下一步棋即可获胜，[2, 2] 代表在第三行第三列下一步棋即可获胜）。例如：

someFunction(
‘x’,
[ [‘o’, ‘e’, ‘e’],
  [‘o’, ‘x’, ‘o’],
  [‘x’, ‘x’, ‘e’] ]
)
// return [ [2, 2], [0, 1], [0, 2] ]

someFunction(
‘x’,
[ [‘x’, ‘o’, ‘o’],
  [‘x’, ‘x’, ‘e’],
  [‘e’, ‘o’, ‘e’] ]
)
// return [ [2, 2], [1, 2], [2, 0] ]

someFunction(
‘x’,
[ [‘x’, ‘x’, ‘o’],
  [‘e’, ‘e’, ‘e’],
  [‘e’, ‘e’, ‘e’] ]
)
// return [ ]

someFunction(
‘o’,
[ [‘o’, ‘o’, ‘o’],
  [‘e’, ‘e’, ‘e’],
  [‘e’, ‘e’, ‘e’] ]
)
 return [ ]
*/
// find 'e' to check the empty coordinates
const findE = function (arr) {
    const eCoor = [];
    arr.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 'e') {
                eCoor.push([i, j])
            }
        });
    })
    return eCoor;
}

const checkVictory = function(x, y, role, arr, degree) {
    arr[x][y] = role;
    let result = false;
    if (degree === 0) {
        result = arr[x][0] === role && arr[x][1] === role && arr[x][2] === role;
    } else if (degree === 90) {
        result = arr[0][y] === role && arr[1][y] === role && arr[2][y] === role;
    } else if (degree === 45) {
        result = arr[0][0] === role && arr[1][1] === role && arr[2][2] === role;
    } else if (degree === -45) {
        result = arr[0][2] === role && arr[1][1] === role && arr[2][0] === role;
    }
    arr[x][y] = 'e';
    return result;
}

// check if win to select the coordinate
const queryVictory = function (role, coors, arr) {
    const victoryResults = [];
    coors.forEach((item) => {
        var x = item[0];
        var y = item[1];
        [-45, 0, 45, 90].forEach((degree) => {
            if (checkVictory(x, y, role, arr, degree)) {
                return victoryResults.push([x, y]);
            }
        })
    });
    return victoryResults;
}

module.exports = function getResult(role, arr) {
    const result = [];
    const eCoor = findE(arr);
    if (eCoor.length === 0) {
        return [];
    }
    return queryVictory(role, eCoor, arr);

}


