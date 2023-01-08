"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    queue;
    head;
    tail;
    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    getSize() {
        return this.tail - this.head;
    }
    enqueue(value) {
        this.queue[this.tail] = value;
        this.tail++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const value = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return value;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[this.head];
    }
    clear() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }
    print() {
        if (this.isEmpty()) {
            return '';
        }
        let values = [];
        for (let i = this.head; i < this.tail; i++) {
            values.unshift(this.queue[i]);
        }
        return values.join(" -> ");
    }
}
exports.default = Queue;
// const myQueue = new Queue();
// myQueue.enqueue(2); 
// myQueue.enqueue(3);
// myQueue.dequeue(); 
// myQueue.enqueue(4); 
// myQueue.dequeue();
// console.log(myQueue.peek());
