function quickSort(arr) {
  quickSort_c(arr, 0, arr.length - 1);
  return arr;
}

function quickSort_c(arr, p, r) {
  if (p >= r) {
    return;
  }
  const q = partition(arr, p, r);
  quickSort_c(arr, p, q - 1);
  quickSort_c(arr, q + 1, r);
}

function partition(arr, p, r) {
  let i = p;
  for (let j = i; j < r; j++) {
    if (arr[j] < arr[r]) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, r);
  return i;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * candies：数组，表示糖果大小
 * kids：数组，表示孩子需求
 */
function giveCandy(candies, kids) {
  let sortedCandies = quickSort(candies);
  let sortedKids = quickSort(kids);
  let satisfiedChild = 0;

  for (let i = 0; i < sortedCandies.length && sortedKids.length; i++) {
    if (sortedCandies[i] >= sortedKids[0]) {
      satisfiedChild++;
      sortedKids.shift();
    }
  }

  return satisfiedChild;
}

console.log(giveCandy([5, 2, 3, 1, 6, 7, 3, 10], [2, 1, 4, 5, 10, 4, 11]))