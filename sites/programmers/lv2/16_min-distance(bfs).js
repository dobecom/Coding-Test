function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Setting the queue and init point for BFS
  const queue = [[0, 0, 1]]; // [r, c, distance for now]
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  console.log(visited);
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    // if arrived to the destination return distance
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    // move 4 directions
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // if it is valid point, push to queue
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  // if fails
  return -1;
}

// test case
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]); // 11
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
//  -1
