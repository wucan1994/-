function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);

        if (value > arr[middle]) {
            low = middle + 1;
        } else if (value < arr[middle]) {
            high = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

function binarySearch_firstEqual(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);

        if (value > arr[middle]) {
            low = middle + 1;
        } else if (value < arr[middle]) {
            high = middle - 1;
        } else {
            if (middle === 0 || arr[middle - 1] < value) {
                return middle;
            }
            high = middle - 1;
        }
    }

    return -1;
}

function binarySearch_lastEqual(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);

        if (value < arr[middle]) {
            high = middle - 1;
        } else if (value > arr[middle]) {
            low = middle + 1;
        } else {
            if (middle === arr.length - 1 || arr[middle + 1] > value) {
                return middle;
            } else {
                low = middle + 1;
            }
        }
    }

    return -1;
}

function binarySearch_firstBigOrEqual(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);

        if (value > arr[middle]) {
            low = middle + 1;
        } else {
            if (middle === 0 || arr[middle - 1] < value) {
                return middle;
            }
            high = middle - 1;
        }
    }

    return -1;
}

function binarySearch_lastSmallOrEqual(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);

        if (value < arr[middle]) {
            high = middle - 1;
        } else {
            if (middle === arr.length - 1 || arr[middle + 1] > value) {
                return middle;
            }
            low = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch_lastSmallOrEqual([1, 2, 3, 4, 4, 4, 5, 5, 6], 4));