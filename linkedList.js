"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    data;
    next = null;
    constructor(data) {
        this.data = data;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    head = null;
    comparator;
    constructor(comparator) {
        this.comparator = comparator;
    }
    append(data) {
        if (!this.head) {
            this.head = new ListNode(data);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new ListNode(data);
    }
    // deletes the first occurance
    delete(data) {
        if (!this.head)
            return;
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }
        let current = this.head.next;
        let previous = this.head;
        while (current) {
            if (current.data === data) {
                current = null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        previous.next = previous.next ? previous.next.next : null;
    }
    search(data) {
        let current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    traverse() {
        const resArr = [];
        let current = this.head;
        while (current !== null) {
            resArr.push(current.data);
            current = current.next;
        }
        console.log(resArr.join('->'));
    }
    reverse() {
        let prev = null, current = this.head, next;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    reverseRecurcive(head = this.head) {
        if (head == null)
            return null;
        if (head.next == null)
            return head;
        let newHead = this.reverseRecurcive(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
exports.default = LinkedList;
// const linkedList = new LinkedList((a: number, b: number) => a === b);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
// linkedList.traverse();
// console.log('----');
// linkedList.head = linkedList.reverseRecurcive();
// // linkedList.reverse();
// linkedList.traverse();
