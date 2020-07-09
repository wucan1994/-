const Capacity = 25;
var things = [{ weight: 3, value: 10 }, { weight: 5, value: 8 }, { weight: 4, value: 6 }, { weight: 6, value: 10 }, { weight: 8, value: 13 }, { weight: 10, value: 20 }, { weight: 15, value: 25 }];
var maxValue = 0;
var obj = {};

function fillBackpack_upgrade(current, curWeight, curValue, items) {
    if (curWeight >= Capacity || current === things.length) {
        if (curValue >= maxValue) {
            maxValue = curValue;
            obj = {
                重量: curWeight,
                价值: curValue,
                物品: items
            }
        }
        return;
    }

    fillBackpack_upgrade(current + 1, curWeight, curValue, items);
    if (curWeight + things[current].weight <= Capacity) {
        fillBackpack_upgrade(current + 1, curWeight + things[current].weight, curValue + things[current].value, items.concat(things[current]));
    }
}

fillBackpack_upgrade(0, 0, 0, []);

console.log(obj)