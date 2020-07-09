var minEdit = 0;
var count = 0;

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (!word1 && !word2) {
        return 0;
    }
    minEdit = Math.max(word1.length, word2.length);

    countEdit(word1, word2);

    return minEdit;
};

var countEdit = function(word1, word2, i = 0, j = 0, edit = 0, status = []) {
    count++;
    if (i === word1.length || j === word2.length) {
        if (i === word1.length) {
            edit += word2.length - j;
        } else {
            edit += word1.length - i;
        }
        minEdit = Math.min(minEdit, edit);
        return;
    }
    // 去掉重复状态，如果i,j相同，取edit值较小的，较大的不必向后计算
    if (status[i] && status[i][j] < edit) return;
    if (!status[i]) {
        status[i] = [];
        status[i][j] = edit;
    }
    let a = word1[i];
    let b = word2[j];

    if (a === b) {
        countEdit(word1, word2, i + 1, j + 1, edit, status);
    } else {
        countEdit(word1, word2, i + 1, j, edit + 1, status);
        countEdit(word1, word2, i, j + 1, edit + 1, status);
        countEdit(word1, word2, i + 1, j + 1, edit + 1, status);
    }
}
// console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine"))
console.log(minDistance('mitacmu', 'mtacnut'), count);

// 时间复杂度过大，改用动态规划