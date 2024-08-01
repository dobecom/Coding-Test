// 깊이 우선 탐색(DFS)
function dfs(graph, start) {
    const visited = new Set();
    function dfsHelper(node) {
      if (visited.has(node)) return;
      visited.add(node);
      console.log(node);
      for (const neighbor of graph[node]) {
        dfsHelper(neighbor);
      }
    }
    dfsHelper(start);
  }
  
  const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
  };
  
  dfs(graph, 2); // 2 0 1 3
  
  // 너비 우선 탐색(BFS)
  function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    while (queue.length > 0) {
      const node = queue.shift();
      if (visited.has(node)) continue;
      visited.add(node);
      console.log(node);
      for (const neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
  
  bfs(graph, 2); // 2 0 3 1
  