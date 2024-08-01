// 스택
class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.items.length === 0) return "Underflow";
      return this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.pop()); // 2
  
  // 큐
  class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.items.length === 0) return "Underflow";
      return this.items.shift();
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue()); // 1
  
  // 해시 테이블
  class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
    hash(key) {
      return key % this.size;
    }
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  }
  
  const ht = new HashTable(5);
  ht.set(1, "value1");
  ht.set(2, "value2");
  console.log(ht.get(1)); // value1
  