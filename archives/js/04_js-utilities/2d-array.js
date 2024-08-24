// the expression that generate 2d array
const n = 5; // row
const m = 5; // column
const visited = Array.from(Array(n), () => Array(m).fill(false));
console.log(visited);

// 1d
const temp = Array(10).fill(1);
console.log(temp);

// 2d (10x5)
const temp2d = Array.from(Array(10), () => Array(5).fill(1));
console.log(temp2d);
