const Capacity = 25;
var things = [3, 5, 4, 6, 8, 10, 15];

var max = 0;

/**
 * 
 * @param {Number} current 当前物品的索引
 * @param {Number} curWeight 当前已放入背包的物品总重量
 * @param {Array} items 当前已放入背包中的物品
 */
function fillBackpack(current, curWeight, items) {
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
    fillBackpack(current + 1, curWeight, items);

    if (curWeight + things[current] <= Capacity) {
        fillBackpack(current + 1, curWeight + things[current], items.concat(things[current]));
    }
}

fillBackpack(0, 0, [])
