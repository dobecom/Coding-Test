// function dfs(graph, start, visited = new Set()) {
//   // result.push(start);
//   console.log(start);
//   visited.add(start);
//   if (graph[start]) {
//     for (const neighbor of graph[start]) {
//       if (!visited.has(neighbor)) {
//         dfs(graph, neighbor, visited);
//       }
//     }
//   }
// }

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

function solution(graph, start) {
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });
  //   console.log(adjList);

  function dfs(graph, start, visited = new Set()) {
    result.push(start);
    visited.add(start);
    if (graph[start]) {
      for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
          dfs(graph, neighbor, visited);
        }
      }
    }
  }

  const result = [];
  dfs(adjList, start);
  console.log(result);
  return result;
}

// 인접리스트 형태
// const graph = {
//   0: [1, 2],
//   1: [2],
//   2: [0, 3],
//   3: [3],
// };
// dfs(graph, 2); // 2 0 1 3
// bfs(graph, 2); // 2 0 3 1

solution(
  [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['E', 'F'],
  ],
  'A',
); // ['A','B','D','E','F','C']
