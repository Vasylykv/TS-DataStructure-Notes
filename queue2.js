"use strict";
class QueueNode {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}
class Queue1 {
    head;
    tail;
    size;
    enqueue(data) {
        let newNode = new QueueNode(data);
        if (this.head == null && this.tail == null) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    dequeue() {
        if (this.head == null)
            return;
        if (this.head == this.tail)
            this.head = this.tail = null;
        else
            this.head = this.head.next;
        this.size--;
    }
    peek() {
        if (this.head == null)
            return null;
        return this.head.data;
    }
    getSize() {
        return this.size;
    }
    print() {
        const resArr = [];
        let tmp = this.head;
        while (tmp != null) {
            resArr.unshift(tmp.data);
            tmp = tmp.next;
        }
        console.log(resArr.join(' -> '));
    }
}
const queue = new Queue1();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(21);
queue.enqueue(50);
queue.print();
// queue.dequeue();
// console.log(queue.peek());
