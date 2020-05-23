class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    // 根据value查找节点
    findNodeByValue(value) {
        let currentNode = this.head.next;

        // 是否需要考虑值为对象的情况
        while (currentNode !== null && currentNode.element !== value) {
            currentNode = currentNode.next;
        }

        return currentNode === null ? -1 : currentNode;
    }

    // 根据index查找节点，下标从0开始
    findNodeByIndex(index) {
        let currentNode = this.head.next;
        let pos = 0;

        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next;
            pos++;
        }

        return currentNode === null ? -1 : currentNode;
    }

    // 向链表末尾追加节点
    appendNode(value) {
        const newNode = new Node(value);
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    // 在指定节点后插入节点
    insertNode(newValue, value) {
        const currentNode = this.findNodeByValue(value);

        if (currentNode === -1) {
            return;
        }

        let newNode = new Node(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    // 查找前一个节点
    findPreNode(value) {
        let currentNode = this.head;

        while (currentNode.next !== null && currentNode.next.element !== value) {
            currentNode = currentNode.next;
        }

        if (currentNode.next === null) {
            return -1;
        }

        return currentNode;
    }

    // 删除指定节点
    removeNode(value) {
        const preNode = this.findPreNode(value);

        if (preNode === -1) {
            return;
        }

        preNode.next = preNode.next.next;
    }

    // 遍历显示所有节点
    display() {
        let currentNode = this.head.next;

        while(currentNode !== null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
}

const linkList = new LinkedList();

linkList.appendNode('wucan');
linkList.appendNode('loves');
linkList.appendNode('xufabing');

linkList.insertNode('always', 'wucan');

linkList.display();

linkList.removeNode('xufabing');
linkList.appendNode('xiaowangzi');

linkList.display();

// console.log('loves节点', linkList.findNodeByValue('loves'));
// console.log('loves的前一个节点', linkList.findPreNode('loves'));
// console.log('第三个节点', linkList.findNodeByIndex(3));

console.log(linkList)

