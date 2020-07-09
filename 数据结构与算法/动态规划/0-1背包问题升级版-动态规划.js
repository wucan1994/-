const Capacity = 25;

function fillBackpackUp_dp(things) {
    let arr = [0];
    for (let i = 0; i < things.length; i++) {
        for (let j = Capacity; j >= 0; j--) {
            if (arr[j] !== undefined && j + things[i].weight <= Capacity) {
                arr[j + things[i].weight] = arr[j] + things[i].value;
            }
        }
    }

    for (let i = 0; i <= Capacity; i++) {
        if (arr[i] === undefined) {
            arr[i] = 0;
        }
    }
    return Math.max(...arr);
}

var things = [{ weight: 3, value: 10 }, { weight: 5, value: 8 }, { weight: 4, value: 6 }, { weight: 6, value: 10 }, { weight: 8, value: 13 }, { weight: 10, value: 20 }, { weight: 15, value: 25 }];
console.log(fillBackpackUp_dp(things));