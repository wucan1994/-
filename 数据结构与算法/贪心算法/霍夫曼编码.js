/**
 * 树的节点
 */
class Node {
    constructor(key = '', value = 0, left = null, right = null) {
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * 
 * @param {object} frequency 字母和字母出现的频率键值对
 */
function Huffman(frequency) {
    let arr = [];
    // 将对象转换成数组
    for (let item in frequency) {
        arr.push(new Node(item, frequency[item]));
    }

    // 构建树
    while(arr.length > 1) {
        arr.sort((a, b) => {
            return a.value - b.value;
        });

        let first = arr.shift();
        let second = arr.shift();
        let node = new Node(first.key + second.key, first.value + second.value, first, second);
        arr.push(node);
    }

    traverseTree(arr[0])
}

/**
 * 递归遍历树
 */
function traverseTree(node) {
    if (node.left !== null || node.right !== null) {
        let leftTree = node.left;
        let rightTree = node.right;
        
        leftTree.code = (node.code || '') + '0';
        rightTree.code = (node.code || '') + '1';

        traverseTree(leftTree);
        traverseTree(rightTree);
    } else {
        console.log(node.key + ': ' + node.code + '\n');
    }
}

Huffman({a: 3, b: 4, c: 1, d: 2, e: 1, f: 1});
console.log('---------------')
Huffman({a: 450, b: 350, c: 90, d: 60, e: 30, f: 20});

// 霍夫曼编码应该不是唯一的