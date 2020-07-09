const Capacity = 20;

/**
 * 
 * @param {Array} things 物品重量
 */
function fillBackpack_dp(things) {
    let arr = [1];
    for (let i = 0; i < things.length; i++) {
        for (let j = Capacity; j >= 0; j--) {
            if (arr[j] && j + things[i] <= Capacity) {
                arr[j + things[i]] = 1;
            }
        }
    }
    for (let i = Capacity; i >= 0; i--) {
        if (arr[i]) {
            return i;
        }
    }
}

var items = [3, 5, 4, 6, 8, 10, 15];
console.log(fillBackpack_dp(items));
