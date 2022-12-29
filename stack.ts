export default class Stack<T> {
  items: T[];
  constructor() {
    this.items = [];
  }

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size(): number {
    return this.items.length;
  }
}
