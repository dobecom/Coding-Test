// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
// HackerRank - [Implementation] Divisible Sum Pairs
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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const pairIndices = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (i < j) {
        if ((ar[i] + ar[j]) % k === 0) {
          pairIndices.push({ i, j });
        }
      }
    }
  }
  return pairIndices.length;
}

/*
Ref. O(n) solution
숫자	나머지 (num % k)	remainderCount 업데이트
1	1	[0, 1, 0]
3	0	[1, 1, 0]
2	2	[1, 1, 1]
6	0	[2, 1, 1]
1	1	[2, 2, 1]
2	2	[2, 2, 2]
ANSWER : 1 + 2 * 2 = 5
*/
function divisibleSumPairs(n, k, ar) {
  let remainderCount = Array(k).fill(0);
  let count = 0;

  for (let num of ar) {
    let remainder = num % k;
    let complement = (k - remainder) % k;
    count += remainderCount[complement];
    remainderCount[remainder]++;
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const ar = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));

  const result = divisibleSumPairs(n, k, ar);
  console.log(result);
  ws.write(result + '\n');

  ws.end();
}
