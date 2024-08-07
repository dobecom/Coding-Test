// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// 타겟 넘버

function solution(numbers, target) {
  let count = 0;
  function dfs(index, currentSum) {
    if (index === numbers.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }
    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }
  dfs(0, 0);
  console.log(count);
  return count;
}

solution([1, 1, 1, 1, 1], 3); //5
solution([4, 1, 2, 1], 4); //2
