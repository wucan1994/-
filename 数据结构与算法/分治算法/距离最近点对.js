var shortestLength = Math.pow(2, 31) - 1;
/**
 * 
 * @param {array} pointList 点对数组
 */
function closestPoints(pointList) {
    if (!pointList.length || pointList.length === 1) {
        return 0;
    }
    computeClosePoints(pointList);
    return Math.sqrt(shortestLength);
}

function computeClosePoints(pointList) {
    if (pointList.length === 1) return;
    for (let i = 1; i < pointList.length; i++) {
        shortestLength = Math.min(shortestLength, Math.pow(pointList[i][0] - pointList[0][0], 2) + Math.pow(pointList[i][1] - pointList[0][1], 2));
    }
    pointList.shift();
    computeClosePoints(pointList);
}

// console.log(closestPoints([[0, 0], [1, 6], [2, 2], [3, 3], [3, 4], [4, 6], [5, 2], [5, 4], [6, 1], [7, 2]]));
console.log(closestPoints([[0, 0], [1, 1]]));