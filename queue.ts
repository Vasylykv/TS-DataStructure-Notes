export default class Queue<T> {
  private queue: Record<number, T>;
  private head: number;
  private tail: number;

  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.tail - this.head;
  }

  enqueue(value: T): void {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }

  peek(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this.queue[this.head];
  }

  clear(): void {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  print(): string {
    if (this.isEmpty) {
      return '';
    }
    let values = [];
    for (let i = this.head; i < this.tail; i++) {
      values.unshift(this.queue[i]);
    }
    return values.join(" -> ");
  }
}

// const myQueue = new Queue();

// myQueue.enqueue(2); 
// myQueue.enqueue(3);
// myQueue.dequeue(); 
// myQueue.enqueue(4); 
// myQueue.dequeue();
// console.log(myQueue.peek());


