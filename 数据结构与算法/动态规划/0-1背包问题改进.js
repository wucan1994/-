console.time();
const Capacity = 20;
var things = [3, 5, 4, 6, 8, 10, 15];

var max = 0; // 不能装满的情况下，最接近装满的重量
var num = 0; // 计算次数

var arr = []; // 保留计算状态的数组

/**
 * 
 * @param {Number} current 当前物品的索引
 * @param {Number} curWeight 当前已放入背包的物品总重量
 * @param {Array} items 当前已放入背包中的物品
 */
function fillBackpack(current, curWeight, items) {
    num++;
    if (curWeight >= Capacity) {
        console.log(curWeight, items);
        return;
    }
    if (current == things.length) {
        if (curWeight > max) {
            max = curWeight;
            console.log(curWeight, items);
        }
        return;
    }
    if (!arr[current]) {
        arr[current] = [];
    }
    if (arr[current][curWeight]) return;
    arr[current][curWeight] = 1;

    fillBackpack(current + 1, curWeight, items);

    if (curWeight + things[current] <= Capacity) {
        fillBackpack(current + 1, curWeight + things[current], items.concat(things[current]));
    }
}

fillBackpack(0, 0, [])
console.log(num)
console.timeEnd();
