var arr = [];
const chessPlate = 8;
var count = 0;
/**
 * 
 * @param {number} row 当前棋子所在行
 * @param {number} column 当前棋子所在列
 */
function queen(row) {
    if (row === chessPlate) {
        count++;
        print(arr);
        return;
    }
    for (let column = 0; column < chessPlate; column++) {
        if (isOK(row, column)) {
            arr[row] = column;
            queen(row + 1);
        }
    }
}

/**
 * 
 * @param {number} row 当前棋子所在行
 * @param {number} column 当前棋子所在列
 */
function isOK(row, column) {
    let left = column - 1;
    let right = column + 1;
    for (let i = row - 1; i >= 0; i--) {
        if (arr[i] === column) return false;
        if (left >= 0 && arr[i] === left) return false;
        if (right <= chessPlate && arr[i] === right) return false;
        left--;
        right++;
    }
    return true;
}

/**
 * 打印棋子
 */
function print(result) {
    console.log('----dayins-----')
    let str = '';
    for (let i = 0; i < result.length; i++) {
        str += '[' + i + ', ' + result[i] + ']' + ', ';
    }
    console.log(str)
    console.log('第' + count + '个')
}

queen(0);