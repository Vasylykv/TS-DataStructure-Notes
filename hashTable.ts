import LinkedList from "./linkedList/linkedList";

class HashTable {
  private size: number;
  private data: LinkedList<string>[] = [];

  constructor(size: number) {
    this.size = size;
  }
  
  private hash(value: string): number {
    const sum = value.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    return sum % this.size;
  }

  insert(value: string): void {
    const index = this.hash(value);

    if (!this.data[index]) {
      this.data[index] = new LinkedList<string>((a: string, b: string) => a ===b);
    }

    this.data[index].append(value);
  }

  search(value: string): string | null {
    const index = this.hash(value);
    if (this.data[index]) {
      return this.data[index].search(value)!.data;
    }

    return null;
  }
}

const hashTable = new HashTable(10);

hashTable.insert('first');
hashTable.insert('second');

console.log(hashTable.search('first'));