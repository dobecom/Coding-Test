# 해시 테이블 (dict)
hash_table = {'a': 1, 'b': 2, 'c': 3}
print(hash_table['a'])  # 1

# 퀵 정렬 (sorted)
arr = [3, 1, 4, 1, 5, 9]
sorted_arr = sorted(arr)
print(sorted_arr)  # [1, 1, 3, 4, 5, 9]

# 동적 계획법 (functools.lru_cache)
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))  # 55

# DFS/BFS (collections.deque)
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            queue.extend(graph[node] - visited)
    return visited

graph = {'A': {'B', 'C'}, 'B': {'A', 'D'}, 'C': {'A', 'D'}, 'D': {'B', 'C', 'E'}, 'E': {'D'}}
print(bfs(graph, 'A'))  # {'A', 'B', 'C', 'D', 'E'}

# 힙 (heapq)
import heapq

heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
print(heapq.heappop(heap))  # 1

# 이분 탐색 (bisect)
import bisect

arr = [1, 2, 3, 4, 5]
index = bisect.bisect_left(arr, 3)
print(index)  # 2