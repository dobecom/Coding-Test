// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
// HackerRank - [Implementation] Breaking the Records
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here
  let highestScore = 0;
  let lowestScore = 0;
  let highestCount = 0;
  let lowestCount = 0;

  scores.forEach((score, index) => {
    if (index === 0) {
      highestScore = score;
      lowestScore = score;
    } else {
      if (score > highestScore) {
        highestScore = score;
        highestCount++;
      } else if (score < lowestScore) {
        lowestScore = score;
        lowestCount++;
      }
    }
  });
  return [highestCount, lowestCount];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);
  ws.write(result.join(' ') + '\n');

  ws.end();
}
