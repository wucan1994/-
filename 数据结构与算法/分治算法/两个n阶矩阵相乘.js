/**
 * 
 * @param {数组} a 二维n阶数组
 * @param {数组} b 二维n阶数组
 */
function matrixMultiply(a, b) {
    if (!a.length || !b.length || a.length !== b.length) return;

    let result = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== a.length || b[i].length !== b.length) return;
        let row = [];
        for (let j = 0; j < a.length; j++) {
            let item = 0;
            for (let k = 0; k < a.length; k++) {
                item += a[i][k] * b[k][j];
            }
            row.push(item);
        }
        result.push(row);
    }

    return result;
}

console.log(matrixMultiply([[1, 5, 7, 10], [2, 1, 5, 3], [4, 4, 2, 1], [6, 5, 7, 8]], [[3, 1, 2, 4], [1, 0, 1, 4], [7, 2, 5, 6], [8, 3, 8, 5]]))