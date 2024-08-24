const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  console.log(`${input[0]} + ${input[1]} = ${parseInt(input[0]) + parseInt(input[1])}`);

  // Number     - 소수점 표시 / 10진수
  // parseInt   - 정수만     / 다양한진수
});
