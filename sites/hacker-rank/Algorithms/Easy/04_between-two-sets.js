//www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
// HackerRank - [Implementation] Between Two Sets
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

function gcdArr(arr) {
  return arr.reduce((acc, val) => gcd(acc, val));
}

function lcmArr(arr) {
  return arr.reduce((acc, val) => lcm(acc, val));
}

function getTotalX(a, b) {
  // Write your code here
  const lcmA = lcmArr(a);
  const gcdB = gcdArr(b);
  let count = 0;

  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);
  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((brrTemp) => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + '\n');

  ws.end();
}


/* 
Sample Input
2 3
2 4
16 32 96

Sample Output
3
*/
