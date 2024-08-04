class NodeLinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new NodeLinkedList(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const removeNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removeNode.data;
  }
}


/* 

import { Queue } from './func/queue.js';

function solution() {
  const q = new Queue();
  q.push(1);
  q.push(2);
  q.push(3);
  console.log(q.pop());
  console.log(q.pop());
  console.log(q.pop());
}

solution();

*/