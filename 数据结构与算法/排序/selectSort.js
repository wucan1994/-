function selectSort(arr) {
    if (arr.length <= 1) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

const arr = [4, 2, 5, 3, 1, 7, 9, 2, 3, 6, 1];
selectSort(arr);
console.log(arr);