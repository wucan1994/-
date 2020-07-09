var arr = [1, 2, 3];
var arr2 = arr.slice();
var arr3 = Object.assign([], arr);
var arr4 = [...arr];

arr2.pop();
arr3.shift();
arr4.push(4);
console.log(arr, arr2, arr3, arr4)