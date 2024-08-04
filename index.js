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
