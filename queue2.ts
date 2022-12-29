class QueueNode<T> {
  data: T;
  next: QueueNode<T>

  constructor(data: T) {
    this.data = data;
  }
}

class Queue1<T> {
  private head: QueueNode<T>
  private tail: QueueNode<T>
  private size: 0;

  enqueue(data: T): void {
    let newNode = new QueueNode(data);
    if (this.head == null && this.tail == null) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  dequeue(): T {
    if (this.head == null) return;
    if (this.head == this.tail) 
      this.head = this.tail = null;
    else
      this.head = this.head.next;
    this.size--;
  }

  peek(): T | null {
    if (this.head == null) return null;
    return this.head.data;
  }

  getSize(): number {
    return this.size;
  }

  print(): void {
    const resArr = [];
    let tmp = this.head;
    while (tmp != null) {
      resArr.unshift(tmp.data);
      tmp = tmp.next;
    }

    console.log(resArr.join(' -> '));
  }
}

const queue = new Queue1<number>();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(21);
queue.enqueue(50);

queue.print();

// queue.dequeue();

// console.log(queue.peek());