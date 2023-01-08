"use strict";
// import LinkedList from "./linkedList/linkedList";
class HashTable {
    size;
    buckets;
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill(undefined).map(() => new Map());
    }
    hash(value) {
        const sum = value.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return sum % this.size;
    }
    insert(key, value) {
        const index = this.hash(key);
        this.buckets[index].set(key, value);
    }
    remove(key) {
        const index = this.hash(key);
        const deleted = this.buckets[index].get(key);
        this.buckets[index].delete(key);
        return deleted;
    }
    search(key) {
        const index = this.hash(key);
        return this.buckets[index].get(key);
    }
}
const hashTable = new HashTable(10);
hashTable.insert('test1', 'hello');
hashTable.insert('test2', 'world');
console.log(hashTable.search('test1'));
console.log(hashTable.search('test2'));
