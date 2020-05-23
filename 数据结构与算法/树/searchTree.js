// 树的节点定义
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 二叉搜索树的定义
class searchTree {
    constructor() {
        this.root = null;
    }

    // 插入节点
    insert(value) {
        let node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return;
        }

        let p_parent = this.root;
        let p = this.root;

        while (p) {
            if (value < p.value) {
                p = p.left;
                if (!p) {
                    p_parent.left = node;
                } else {
                    p_parent = p;
                }
            } else {
                p = p.right;
                if (!p) {
                    p_parent.right = node;
                } else {
                    p_parent = p;
                }
            }
        }
    }

    // 查找节点
    find(value) {
        let p = this.root;

        while (p) {
            if (value < p.value) {
                p = p.left;
            } else if (value == p.value) {
                return p;
            } else {
                p = p.right;
            }
        }

        return -1;
    }

    // 删除节点
    delete(value) {
        let p = this.root;

        while (p) {
            if (value < p.value) {
                p = p.left;
            } else if (value > p.value) {
                p = p.right;
            } else {
                // 执行删除操作

            }
        }
    }

    // 遍历树
}

let tree = new searchTree();

const arr = [3, 1, 2, 4, 0, 6, 5, 0];
for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
}
console.log('插入节点', arr);
console.log('插入结果', JSON.stringify(tree));
console.log('-----------------------------');

const findNum = 6;
console.log('查找节点', findNum);
console.log('查找结果', tree.find(findNum));
console.log('-----------------------------');