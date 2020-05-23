/**
 * 
 * @param {区间数组} ranges 
 */
function rangeCover(ranges) {
  ranges = ranges.sort((a, b) => {
    return a[0] - b[0];
  });

  let min = Math.pow(2, 31) - 1;
  let max = - Math.pow(2, 31);

  // 求出区间的最大、最小值
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i][0] < min) {
      min = ranges[i][0];
    }
    if (ranges[i][1] > max) {
      max = ranges[i][1];
    }
  }

  let lastRange = ranges[0];
  let count = 1;
  let finalRanges = [ranges[0]];
  
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i][0] >= lastRange[0] && ranges[i][1] <= lastRange[1]) {
      lastRange = ranges[i];
      finalRanges.pop();
      finalRanges.push(ranges[i]);
    } else if (ranges[i][0] >= lastRange[1]) {
      lastRange = ranges[i];
      count++;
      finalRanges.push(ranges[i]);
    }
  }

  return count;
}

console.log(rangeCover([[6, 8], [2, 4], [3, 5], [1, 3], [5, 9], [8, 10]]))