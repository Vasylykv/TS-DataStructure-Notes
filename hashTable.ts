// import LinkedList from "./linkedList/linkedList";


class HashTable {
  private size: number;
  private buckets: Map<string, string>[];

  constructor(size: number) {
    this.size = size;
    this.buckets = new Array(size).fill(undefined).map(() => new Map());
  }
  
  private hash(value: string): number {
    const sum = value.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    return sum % this.size;
  }

  insert(key: string, value: string): void {
    const index = this.hash(key);
    this.buckets[index].set(key, value);
  }

  remove(key: string): string {
    const index = this.hash(key);
    const deleted = this.buckets[index].get(key);
    this.buckets[index].delete(key);
    return deleted;
  }

  search(key: string): string | null {
    const index = this.hash(key);
    return this.buckets[index].get(key);
  }
}

const hashTable = new HashTable(10);

hashTable.insert('test1', 'hello');
hashTable.insert('test2', 'world');

console.log(hashTable.search('test1'));
console.log(hashTable.search('test2'));