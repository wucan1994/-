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
linkList.appendNode(1);
linkList.appendNode(2);
linkList.appendNode(3);
linkList.appendNode(4);
linkList.appendNode(5);
linkList.appendNode(6);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseSubGroup = function(behind, front) {
    let pre = behind;
    let cur = pre.next;
    let next;
    while (cur !== front) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    
    cur.next = pre;
    behind.next = null;

    return {
        head: cur,
        tail: behind
    }
}

var reverseKGroup = function(head, k) {
    if (k === 1) {
        return head;
    }
    let pos = head;
    let i = 1;
    let hair = null;
    let tail = {};
    while(pos.next) {
        if (i < k) {
            i += 1;
            pos = pos.next;
        } else {
            let h = head; let p = pos;
            head = pos.next;
            pos = head;
            let reversedGroup = reverseSubGroup(h, p);
            if (!hair) {
                hair = reversedGroup.head;
            } else {
                tail.next = reversedGroup.head;
            }
            tail = reversedGroup.tail;
            i = 1;
        }
        
    }
    if (i === k) {
        let h = head, p = pos;
        head = reverseSubGroup(h, p).head;
    }
    if (!hair) {
        return head;
    }
    tail.next = head;
    return hair;
};

console.log(reverseKGroup(linkList.head.next, 6));