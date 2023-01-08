"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("./stack"));
class MyQueue {
    stackNewest;
    stackOldest;
    constructor() {
        this.stackNewest = new stack_1.default();
        this.stackOldest = new stack_1.default();
    }
    size() {
        return this.stackNewest.size() + this.stackOldest.size();
    }
    add(value) {
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
