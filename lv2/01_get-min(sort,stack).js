function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  const r = A.length;
  for (let i = 0; i < r; i++) {
    answer += A.pop() * B.pop();
  }
  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
