/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (!word1.length || !word2.length) {
        return word1.length || word2.length;
    }

    let arr = [];

    for (let i = 0; i < word2.length; i++) {
        arr[i] = [];
        for (let j = 0; j < word1.length; j++) {
            arr[i][j] = 0;
        }
    }

    arr[0][0] = word1[0] === word2[0] ? 0 : 1;

    for (let j = 1; j < word1.length; j++) {
        if (word1[j] === word2[0]) {
            arr[0][j] = j;
        } else {
            arr[0][j] = arr[0][j - 1] + 1;
        }
    }

    for (let i = 1; i < word2.length; i++) {
        if (word2[i] === word1[0]) {
            arr[i][0] = i;
        } else {
            arr[i][0] = arr[i - 1][0] + 1;
        }
    }

    for (let i = 1; i < word2.length; i++) {
        for (let j = 1; j < word1.length; j++) {
            if (word1[j] === word2[i]) {
                arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1]);
            } else {
                arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + 1);
            }
        }
    }

    return arr[word2.length - 1][word1.length - 1];
}

// console.log(minDistance('mitacmu', 'mtacnut'))
// console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine"))
console.log(minDistance("pneumonoultramicroscopicsilicovolcanoconiosis", "ultramicroscopically"))