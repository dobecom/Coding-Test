function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
bfs(graph, 2); // 2 0 3 1
