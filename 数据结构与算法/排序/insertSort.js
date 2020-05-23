function insertSort(arr) {
    if (arr.length <= 1) {
        return;
    }

    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i - 1;
        for (j; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }
}

const arr = [4, 2, 5, 3, 1, 7, 9, 2, 3, 6, 1];
insertSort(arr);
console.log(arr);