function quickSort(arr) {
    quickSort_c(arr, 0, arr.length - 1);
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
    const pivot = arr[r];

    let i = p;
    for (let j = p; j < r; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, r);

    return i;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [4, 2, 5, 3, 1, 7, 9, 2, 3, 6, 1];
quickSort(arr);
console.log(arr);