import Stack from "./stack";

class MyQueue<T> {
  stackNewest: Stack<T>;
  stackOldest: Stack<T>;

  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  size() {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  add(value: T) {
    this.stackNewest.push(value);
  }

  shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  peek() {
    this.shiftStacks();
    return this.stackOldest.peek();
  }

  remove() {
    this.shiftStacks();
    return this.stackOldest.pop();
  }
}
