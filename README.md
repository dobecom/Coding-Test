# Algorithm Practice

## Practice Sites
- [Programmers](https://school.programmers.co.kr/learn/challenges?order=recent)
- The solutions to the problems I have solved will be stored in the folders `lv0` ~ `lv3`.

## JavaScript Functions and Examples for Coding Tests
1. [Pitfalls](./00_pitfalls)
    - **floating-point-precision.js**: Functions and examples illustrating floating point precision issues.
    - **variable-scope.js**: Examples and explanations of variable scope in JavaScript.

2. [Data Structures](./01_data-structures)
    - **bfs.js**: Implementation of the Breadth-First Search (BFS) algorithm.
    - **binary-search.js**: Implementation of the Binary Search algorithm.
    - **dfs.js**: Implementation of the Depth-First Search (DFS) algorithm.
    - **max-heap.js**: Implementation of a Max-Heap data structure.
    - **min-heap.js**: Implementation of a Min-Heap data structure.
    - **queue.js**: Implementation of a Queue data structure.

3. [Math Utilities](./02_math-utilities)
    - **permutations.js**: Function to generate all permutations of an array.
    - **prime.js**: Function to check if a number is prime.

## Tips
1. **Finding Counterexamples When Some Test Cases Fail**
    - Make sure that the last index works correctly if there is a for loop (example: lv2 - 11).

2. **Calculating All Possible Combinations by Handling Edge Cases**
    - Calculate all possible combinations first and then handle any exceptions to simplify problem-solving (example: lv2 - 10).

3. **Implementing Specific Data Structure Algorithms in JavaScript**
    - If you fail the efficiency test and need to implement a specific data structure algorithm yourself, it is recommended to solve it using a language that provides data structure algorithm libraries, such as Python or Java (e.g., Heap Sort) (example: lv2 - 12).

4. **Reconsidering the Approach When Many Test Cases Fail**
    - If more than half of the test cases fail, reconsider your approach (example: lv2 - 13).
