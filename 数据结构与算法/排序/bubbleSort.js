function bubbleSort(arr) {
    if (arr.length <= 1) {
        return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
}

const arr = [4, 2, 5, 3, 1, 7, 9, 2, 3, 6, 1];
bubbleSort(arr);
console.log(arr);